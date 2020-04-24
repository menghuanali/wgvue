<template>
  <div>
          <div class="wg_aitu_head">
    <wgnologinandwhiteheader></wgnologinandwhiteheader>
    </div>
      <div class="wg_aitu_index_background"></div>
    <el-card class="login-form-layout">
      <el-form ref="loginForm" :model="loginForm" label-width="20px" autocomplete="on">
        <!-- <div style="text-align: center">
          <svg-icon icon-class="all" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div> -->
        <h2 class="login-center">登陆</h2>
        <el-form-item prop="username" >
          <el-input v-model="loginForm.username" placeholder="请输入用户名" name="username" type="text">
            <span slot="prefix">
              <svg-icon icon-class="user"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
          >
            <span slot="prefix">
              <svg-icon icon-class="password"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >
          登录</el-button>
        </el-form-item>
      </el-form>
      <!-- <div slot="header"></div>
      <div></div> -->
    </el-card>
  </div>
</template>
<script>
import wgnologinandwhiteheader from '@/components/Htmlviews/wgnologinandwhiteheader.vue'
export default {
  name: "login",
  components:{ wgnologinandwhiteheader},
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
     handleLogin() {
          // console.log(this.$refs.loginForm);//打印
          //validate传入callback函数，验证完成后返回callback(valid)
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          //Login是action函数名 this.loginForm是数据
          this.$store.dispatch("Login", this.loginForm).then((response)=> {
              this.loading = false;
              console.log(response);
              let code = response.code;
              console.log(code);
              if (code == 200) {
                // alert(response.message);
                this.$router.push({
                  path: "/"
                });
              } else {
                this.$router.push({
                  path: "/404"
                });
              }
            })
            .catch((error) => {
              console.log("index.vue报错");
              this.loading = false;
            });
        } else {
          // eslint-disable-next-line no-console
          console.log("参数验证不合法！");
          return false;
        }
      });
    }
  },
};
</script>
<style scoped lang="less">
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}
 
.login-center {
  text-align: center;
}

.wg_aitu_index_background{
    background-image:url(../../assets/jpg/indexbackground.jpg);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>