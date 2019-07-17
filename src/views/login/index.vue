<template>
  <div class="login-container">
    <!-- <img class="bg-icon bg-icon__top-right" src="../../assets/corp_images/bg_icon.png" /> -->
    <img class="bg-icon bg-icon__bottom-left" src="../../assets/corp_images/bg_icon.png" />
    <div class="login-box">
      <div class="login-box__left">
        <img class="login-box_left-img" src="../../assets/corp_images/left_group.png" />
        <img class="login-box_left-icon" src="../../assets/corp_images/car.png">
      </div>
      <div class="login-box__right">
        <div class="login-form-view">
          <!-- <img class="login-form-view__cj-logo" src="../../assets/corp_images/logo2.png" /> -->
          <div class="login-form-view__cj-login-sys-title">超级车间管理系统</div>
          <div class="login-form">
            <el-menu
              class="login-form-top"
              mode="horizontal"
              active-text-color="#3a8ee6"
              :default-active="activeIndex">
              <el-menu-item index="1" @click="loginClick"><router-link to="/login">登录</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="/register">注册</router-link></el-menu-item>
            </el-menu>
            <router-view />
          </div>
          <!-- <div class="login-form-view__cj-copyright">Copyright 2019 优信养车出品</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ifError } from 'assert'
export default {
  name: 'Login',
  data() {
    return {
      activeIndex: '2'
    }
  },
  methods: {
    loginClick () {
      this.$router.push('/login');
    },
    registerClick () {
      this.$router.push('/register');
    }
  },
  watch:{
    $route(to,from){
      if (to.path === '/register') {
        this.activeIndex = '2'
      } else if(to.path === '/login') {
        this.activeIndex = '1'
      }
    }
  },
  mounted () {
    this.registerClick();
    console.log(this.$route)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  background: linear-gradient(
    135deg,
    rgba(237, 239, 241, 1),
    rgba(219, 223, 232, 1)
  );
  .bg-icon {
    position: absolute;
    &__top-right {
      top: -100px;
      width: 561px;
      height: 404px;
    }
    &__bottom-left {
      right: -130px;
      bottom: 0;
      width: 822px;
      height: 590px;
    }
  }
  .login-box {
    width: 900px;
    height: 500px;
    box-shadow: 0px 30px 60px 0px rgba(102, 113, 137, 0.35);
    margin: 50px auto;
    border-radius: 8px;
    &__left {
      float: left;
      width: 500px;
      height: 100%;
      border-radius: 8px 0 0 8px;
      animation: leftImgShow 2.5s forwards;
    }
    &__right {
      position: relative;
      float: left;
      width: 400px;
      height: 100%;
      border-radius: 0 8px 8px 0;
      background-color: #fff;
    }
    &_left-img {
      width: 100%;
      height: 100%;
    }
    &_left-icon {
      width: 325px;
      height: 325px;
      position: absolute;
      z-index: 1;
      left: 309px;
      top: 250px;
    }
  }
  .login-form-view {
    position: absolute;
    height: 400px;
    left: 50px;
    top: 32px;
    &__cj-logo {
      position: absolute;
      right: 0;
      top: 0;
      width: 130px;
      height: 27px;
    }
    &__cj-login-sys-title{
      position: absolute;
      right: 0;
      top: 35px;
      font-size:14px;
      line-height:22px;
      padding:0;
      margin:0;
      color:#818493;

    }
    &__cj-copyright {
      position: absolute;
      color: #b5b9cc;
      line-height: 16px;
      font-size: 12px;
      bottom: 0;
      right: 0;
    }
  }
  .login-form {
    margin-top: 100px;
    &-top {
      border: none;
      padding-left: 102px;
      padding-bottom: 10px;
      li {
        height: 33px;
        line-height: 33px;
        a {
          font-size: 16px;
        }
      }
      
    }
  }
}
@keyframes leftImgShow {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
