<template>
  <div style="overflow-x: hidden;" v-loading="loading">
    <wgloginandblackheader></wgloginandblackheader>
    <div class="head" v-loading="headloading">
      <img :src="form.headurl" alt />
<el-upload
  action="http://localhost:8090/uploadone"
  :show-file-list="false"
  :headers="config"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload"
  :on-error="handleAvatarError">
  <el-button type="primary">上传头像</el-button>
</el-upload>

    </div>
    <div class="first">
      <h3>个人资料</h3>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules" status-icon>
        <el-form-item prop="name">
          <p class="nicheng">昵称</p>
          <div class="shurukuang">
            <el-input v-model="form.name" placeholder="请输入昵称" maxlength="24" minlength="1"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="qianming">
          <p class="nicheng">个人说明</p>
          <div class="shurukuang">
            <el-input v-model="form.qianming" placeholder="请输入签名" maxlength="200" minlength="1"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <p class="nicheng">年龄</p>
          <el-select v-model="form.age" placeholder="请选择">
            <el-option label="保密" value="保密"></el-option>
            <el-option v-for="(p,index) in 100" :key="index" :label="index" :value="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="email">
          <p class="nicheng">联系邮箱</p>
          <div class="shurukuang">
            <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="phone">
          <p class="nicheng">个人手机</p>
          <div class="shurukuang">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <p class="nicheng">QQ</p>
          <div class="shurukuang">
            <el-input v-model="form.qq" placeholder="请输入QQ号"></el-input>
          </div>
        </el-form-item>

        <el-form-item style="text-align: end;">
          <el-button type="primary" @click="onSubmit">保存更改</el-button>
          <el-button type="primary" round style="margin-top: 60px;display: block;" @click="GoToPassword()">去修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import { CheckNameFunction, ChangeMySelfInfo } from "@/api/allrequest.js";
import { getToken } from "@/utils/auth";
export default {
  components: { wgloginandblackheader },
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      }
      if (value == this.$store.getters.my_name) {
        callback();
      } else {
        CheckNameFunction(value)
          .then(response => {
            console.log(response);
            if (response.msg == "") {
              callback();
            }
            callback(response.msg);
          })
          .catch(error => {});
      }
    };
    return {
      form: {
        name: "",
        headurl: "",
        qianming: "",
        age: "",
        email: "",
        phone: "",
        qq: ""
      },
      loading: false,
      headloading:false,
      config : {
          Aitutoken: getToken()
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          // 这个只能验证手机号
          // { pattern:/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/, message: "请输入合法手机号", trigger: "blur" }
          {
            pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
            message: "请输入合法手机号/电话号",
            trigger: "blur"
          }
        ],
        idNumber: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: "请输入合法身份证号",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            pattern: /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,
            message: "请输入正确的邮箱",
            trigger: "blur"
          }
        ],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  computed: {
    getUserdetails() {
      return this.$store.getters.my_userdetails;
    }
  },
  created: function() {
    this.form.name = this.$store.getters.my_name;
    this.form.headurl = this.$store.getters.my_avatar;
    this.form.qianming = this.getUserdetails.introduce;
    this.form.age = this.getUserdetails.age;
    this.form.email = this.getUserdetails.email;
    this.form.phone = this.getUserdetails.phone;
    this.form.qq = this.getUserdetails.qq;
  },
  methods: {
      GoToPassword(){
          this.$router.push({path:"/password"});
      },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          ChangeMySelfInfo(this.form)
            .then(response => {
              this.loading = false;
              this.$message({
                message: "更改成功",
                type: "success"
              });
            })
            .catch(error => {
              this.$message.error("未知错误");
            });
        } else {
          this.$notify({
            title: "错误",
            message: "参数验证不合法！",
            type: "error"
          });
        }
      });
    },
    beforeAvatarUpload(file) {
      //判断大小和类型
      this.headloading = true;
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isGIF = file.type === "image/gif";
      const isLt2M = file.size / 1024 / 500 < 1;
      if (!isJPG && !isPNG && !isGIF) {
        this.$message.error("上传图片只能是 JPG/PNG/GIF 格式!");
        this.headloading = false;
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 500KB!");
        this.headloading = false;
      }
      return (isJPG || isGIF || isPNG) && isLt2M;
    },
    //上传成功的钩子
    handleAvatarSuccess(response, file, fileList) {
        console.log(response);
        
        this.headloading = false;
        this.form.headurl = response.url;
                this.$message({
                message: "头像上传成功，记得保存更改",
                type: "success"
              });
    },
    handleAvatarError(response, file, fileList){
        this.headloading = false;
    }
  }
};
</script>
<style scoped lang="less">
.head {
  position: absolute;
  right: 20%;
  top: 200px;
  text-align: center;
  img {
    width: 140px;
    height: 140px;
    border: 1px solid #e2e2e2;
    font-size: 115px;
    display: block;
    border-radius: 100%;
    background-size: 100%;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 20px;
  }
}
.first {
  width: 40%;
  margin: 0 auto;
  h3 {
    display: inline-block;
    font-size: 24px;
    color: #000;
  }
  .nicheng {
    margin: 0;
    padding: 0;
    outline: 0;
    margin-bottom: 10px;
    font-size: 14px;
    color: #111;
  }
  .shurukuang {
    width: 50%; 
  }
}

</style>
