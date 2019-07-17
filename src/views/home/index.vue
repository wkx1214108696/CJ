<template>
  <el-container>
    <el-header><head-top></head-top></el-header>
    <el-main>
      <side-bar />
      <main-home />
    </el-main>
  </el-container>
</template>

<script>
import sideBar from './components/sideBar'
import headTop from './components/headTop'
import mainHome from '../main'
export default {
  components: {
    headTop,
    sideBar,
    mainHome
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  .el-header {
    padding: 0;
  }
  .el-main {
    padding: 0;
  }
  
}

</style>
