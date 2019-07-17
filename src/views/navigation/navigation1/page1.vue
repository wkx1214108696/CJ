<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="left" class="page-form">
      <el-row>
        <el-col :span="10">
          <el-form-item label="搜索:">
            <el-input v-model="form.search" placeholder="请输入车辆全价ID、半价ID、淘宝订单号、VIN码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="城市:">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="提交时间:">
            <el-date-picker
              v-model="form.date"
              type="datetimerange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-button type="success" size="small">查询</el-button>
          <el-button type="success" size="small">重置</el-button>
          <el-button type="success" size="small">导出</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane :label="'待审核('+pendingReviewNum+')'" name="first"><review-table /></el-tab-pane>
      <el-tab-pane :label="'审核驳回('+rejectedNum+')'"  name="second">
        <review-table3 />
      </el-tab-pane>
      <el-tab-pane :label="'审核通过('+examinationPassedNum+')'"  name="third">
        <review-table2 />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ReviewTable from '../../table/table.vue'
import ReviewTable2 from '../../table/table2.vue'
import ReviewTable3 from '../../table/table3.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    ReviewTable,
    ReviewTable2,
    ReviewTable3
  },
  data() {
    return {
      form: {
        search: '',
        city: '',
        date: ''
      },
      activeName: 'first'
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    handleClick(tab, event) {
      console.log(tab, event,this.activeName);
    }
  },
  computed: {
    ...mapGetters(['pendingReviewNum','examinationPassedNum','rejectedNum']),
  }
}
</script>

<style lang="scss" scoped>
.page-form /deep/ .el-form-item__label {
  font-weight: bold;
}
.el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner {
  width: 373px;
}
</style>

