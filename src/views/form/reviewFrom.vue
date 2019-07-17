<template>
  <el-form ref="form" :model="form" label-width="80px" size="small" label-position="left" class="page-form" height='500'>
    <el-container>
      <el-main>
        <el-divider content-position="left">客户姓名</el-divider>
        <span>{{form.name}}</span>
        <el-divider content-position="left">车辆型号</el-divider>
        <span>{{form.name}}</span>
        <el-divider content-position="left">订单状态</el-divider>
        <span>{{form.name}}</span>
        <el-divider content-position="left">客户姓名</el-divider>
        <span>{{form.name}}</span>
        <el-divider content-position="left">客户姓名</el-divider>
        <span>{{form.name}}</span>
        <el-divider content-position="left">客户姓名</el-divider>
        <span>{{form.name}}</span>  
      </el-main>
    </el-container>
  </el-form>
</template>

<script>
export default {
  props: {
    form: Object
  },
  data () {
    return {
      reviewFrom: {},
      reviewFromModify: {}
    }
  },
  mounted () {
    console.log(this.form)

  }
}

</script>

<style lang="scss" scoped>
.el-dialog__body {
  padding-top: 0px;
}
.el-container {
  height: 300px;
}
</style>
