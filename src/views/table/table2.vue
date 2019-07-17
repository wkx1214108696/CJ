<template>
  <div>
    <el-table
      :data="tableData"
      border
      >
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
        prop="remarks"
        label="备注"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button  type="text" size="small" @click="handleClick(scope.row,'look',scope.$index)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    data() {
      return {
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
      ...mapMutations(['SetExaminationPassed']),
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
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    },
    computed: {
      ...mapGetters(['examinationPassed']),
    },
    mounted () {
      this.tableData = this.examinationPassed
      console.log(this.tableData )
    }
  }
</script>