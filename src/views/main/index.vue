<template>
  <el-container>
    <el-header>
      <main-top />
    </el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
import mainTop from './components/mainTop.vue'
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  components: {
    mainTop
  },
  data () {
    return {
      iconClass: 'el-icon-edit'
    }
  },
  methods: {
    ...mapMutations(['SetPendingReview']),
    // handClick() {
    //   this.SetPendingReview(this.tableData)
    //   console.log(this.pendingReview)
    // },
    getData() {
      this.$axios.get('/api/index.json')
      .then(res => {
        console.log(res.data)
          this.SetPendingReview(res.data)
          console.log(this.pendingReview)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.el-header{
  padding: 0;
}
</style>