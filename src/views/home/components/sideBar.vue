<template>
  <div>
    <el-menu
      :style="{backgroundColor: $store.state.baseColor}"
      class="el-menu-vertical-demo" 
      :router=true 
      :default-active="$route.name"
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff">
      <el-menu-item @click="handClick">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项一</el-menu-item>
          <el-menu-item index="1-2">选项二</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项三</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项四-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-menu-item index="3-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
          <el-menu-item index="4-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu> 
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      handClick() {
        this.$router.push('/home')
      }
    },
    mounted () {
      this.bus.$on('getIsCollapse', (msg) => {
        this.isCollapse = msg
      })
    }
  }
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 225px;
  min-height: 550px;
  float: left;
  background: rgb(84, 92, 100);
  .el-submenu {
    i {
      color: #fff;
    }
  }
  .el-menu-item {
    background: rgba(0,0,0,0);
    i {
      color: #fff;
    }
  }
}
.el-menu--collapse {
  float: left;
  min-height: 550px;
}
.el-submenu__title {
  background: rgba(0,0,0,0);
}
.el-menu {
  background: rgb(84, 92, 100);
}
</style>
