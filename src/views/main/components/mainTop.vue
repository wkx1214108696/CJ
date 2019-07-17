<template>
  <el-col class="main__top">
    <el-col class="main__top-icon" :span="1" ><div @click="iconClick"><i :class="iconClass"></i></div></el-col>
    <el-col :span="6">
      <bread-crumb />
    </el-col>
  </el-col>
</template>

<script>
import breadCrumb from './breadcrumb'
export default {
  components: {
    breadCrumb
  },
  data () {
    return {
      iconClass: 'el-icon-s-fold',
      isCollapse: false
    }
  },
  methods: {
    iconClick () {
      this.iconClass = this.iconClass === 'el-icon-s-fold' ? 'el-icon-s-unfold' : 'el-icon-s-fold';
      this.isCollapse = this.isCollapse === false ? true : false;
      console.log(this.isCollapse)
      this.bus.$emit('getIsCollapse', this.isCollapse)
    }
  },
  // mounted () {
  //   console.log(this.$route)
  // }
}
</script>

<style lang="scss" scoped>
.main__top {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  &-icon {
    &:hover {
      color: #fff;
      background: rgb(67, 74, 80);
    }
  }
  &-breadcrumb {
    margin-left: 10px;
    height: 50px;
    line-height: 50px;
  }
}
</style>
