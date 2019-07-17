<template>
  <el-col class="head__top" :style="{backgroundColor: $store.state.baseColor}">
    <!-- <el-col :span="4" class="head__top-left"><img src="../../../assets/corp_images/logo2.png" alt=""></el-col> -->
    <el-col :span="3" :offset="19" class="head__top-right">
      <el-dropdown trigger="click" >
        <span class="el-dropdown-link">
          欢迎XXX<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>个人首页</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check-outline" divided><router-link to="/">注销登录</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <el-col :span="1">
      <el-color-picker v-model="$store.state.baseColor" title="主题"></el-color-picker>
    </el-col>
  </el-col>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.head__top {
  height: 60px;
  width: 100%;
  line-height: 60px;
  text-align: center;
  background: #555;
  &-left {
    padding-top: 16px;
  }
  &-right {
    &:hover {
      background: #777;
    }
    .el-dropdown-link {
      color: #fff;
    }
  }
}
.el-color-picker {
  margin-top: 10px;
}
</style>
