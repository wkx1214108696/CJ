<template>
  <div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="工单ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="车辆型号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="客户姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="地址"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="购买方案"
        width="150">
      </el-table-column>
      <el-table-column
        prop="type"
        label="是否淘宝"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="业务类型"
        width="300">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button  type="text" size="small" @click="handleClick(scope.row,'look',scope.$index)">查看</el-button>
          <el-button @click="handleClick(scope.row,'nolook',scope.$index)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="fromClass"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <review-from
      :form="list"
      v-if="listShow"
      ></review-from>
      <review-from2
      :form="list"
      v-if="listShow2"
      ></review-from2>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="dialogVisible = false" @click.native.prevent="deleteRow(index, tableData, 'no')">驳回</el-button>
        <el-button type="primary"  @click.native.prevent="deleteRow(index, tableData, 'ok')">通过</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ReviewFrom from '../form/reviewFrom.vue'
import ReviewFrom2 from '../form/reviewFrom2.vue'
import {mapState, mapMutations, mapGetters} from 'vuex'
  export default {
    components: {
      ReviewFrom,
      ReviewFrom2
    },
    data() {
      return {
        num: 0,
        tableData: [],
        index: 0,
        list: {},
        dialogVisible: false,
        fromClass: '',
        listShow: false,
        listShow2: false,
      }
    },
    methods: {
      ...mapMutations(['SetPendingReview','SetExaminationPassed', 'SetRejected']),
      handleClick(row,type,index) {
        this.index = index;
        if (type === 'look') {
          this.fromClass = '查看详情'
          this.listShow = true
          this.listShow2 = false
        } else {
          this.fromClass = '编辑信息'
          this.listShow =  false
          this.listShow2 = true
        }
        this.list = row;
        this.dialogVisible = true;
        console.log(row,this.list,this.index)
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      deleteRow(index, rows, status) {
        let row = rows.splice(index, 1)
        this.dialogVisible = false
        this.SetPendingReview(rows)
        // status === 'no' ? this.SetRejected(row) : this.SetExaminationPassed(row)
        if (status === 'no') {
          this.SetRejected(row)
          this.$message({
            message: '审核已驳回',
            type: 'success'
          });
        } else {
          this.SetExaminationPassed(row)
          this.$message({
            message: '审核已通过',
            type: 'success'
          });
        }
        
      }
    },
    computed: {
      ...mapGetters(['pendingReview', 'examinationPassed']),
    },
    
    created () {
      this.tableData = this.pendingReview
    }
  }
</script>