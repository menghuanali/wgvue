<template>
  <div style="overflow-x: hidden;" v-loading="loading">
    <wgloginandblackheader></wgloginandblackheader>
    <h3>修改密码</h3>
    <div class="first">
      <el-form ref="formpass" :model="form" label-width="80px" :rules="rules" status-icon>
        <el-form-item prop="oldpassword">
          <p class="nicheng">原密码</p>
          <div class="shurukuang">
            <el-input v-model="form.oldpassword"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="newpassword">
          <p class="nicheng">新密码</p>
          <div class="shurukuang">
            <el-input v-model="form.newpassword"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="surepassword">
          <p class="nicheng">确认密码</p>
          <div class="shurukuang">
            <el-input v-model="form.surepassword"></el-input>
          </div>
        </el-form-item>
        <el-form-item style="text-align: end;">
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>

    <basefooter></basefooter>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import basefooter from "@/components/Htmlviews/basefooter.vue";
import { CheckPasswordFunction, ChangeMyPassword } from "@/api/allrequest.js";
import { getToken } from "@/utils/auth";
export default {
  components: { wgloginandblackheader, basefooter },
  data() {
    var checkoldpassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("旧密码不正确"));
      }
      CheckPasswordFunction(value)
        .then(response => {
          if (response.pass == 1) {
            callback();
          } else {
            return callback(new Error("旧密码不正确"));
          }
        })
        .catch(error => {
          return callback(new Error("服务器异常，稍后再试哦"));
        });
    };
    var checknewpassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("新密码不能为空"));
      }
      callback()
    };
    var checksurepassword = (rule, value, callback) => {
      if (value == this.form.newpassword) {
        callback()
      } else {
        return callback(new Error("俩次密码不一样"));
      }
    };
    return {
      form: {
        oldpassword: "",
        newpassword: "",
        surepassword: ""
      },
      loading: false,
      rules: {
        oldpassword: [{ validator: checkoldpassword, trigger: "blur" }],
        newpassword: [{ validator: checknewpassword, trigger: "blur" }],
        surepassword: [{ validator: checksurepassword, trigger: "blur" }]
      }
    };
  },
  computed: {},
  created: function() {},
  methods: {
    onSubmit() {
      this.$refs.formpass.validate(valid2 => {
        if (valid2) {
          ChangeMyPassword(this.form.newpassword)
            .then(response => {
              this.loading = false;
              this.$message({
                message: "更改成功",
                type: "success"
              });
              setTimeout(() => {
                  this.$store.dispatch("LogOut").then((response)=> {
                      let code = response.code;
              if (code == 200) {
                this.$router.go(0);
              } else {
                this.$router.push({
                  path: "/404"
                });
              }
            })
              }, 1000);
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
    }
  }
};
</script>
<style scoped lang="less">
h3 {
  font-size: 24px;
  color: #000;
  text-align: center;
}
.first {
  margin: 80px auto;
  width: 40%;
  height: 500px;
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
