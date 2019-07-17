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
        prop="status"
        label="标签"
        width="100"
        >
        <template slot-scope="scope">
          <el-tag
            disable-transitions>
            {{scope.row.status}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button  type="text" size="small" @click="handleClick(scope.row,'look',scope.$index)">查看</el-button>
          <!-- <el-button @click="handleClick(scope.row,'nolook',scope.$index)" type="text" size="small">编辑</el-button> -->
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
        fromClass: ''
      }
    },
    methods: {
      handleClick(row,type,index) {
        this.index = index;
        if (type === 'look') {
          this.fromClass = '查看详情'
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
      }
    },
    computed: {
      ...mapGetters(['rejected']),
    },
    mounted () {
      this.tableData = this.rejected
    }
  }
</script>