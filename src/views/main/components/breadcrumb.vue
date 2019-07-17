<template>
  <el-breadcrumb separator="/" class="main__top-breadcrumb">
    <!-- <el-breadcrumb-item v-for="bread in breadList" v-bind:key="bread.name" :to='bread.path'>
      {{ breadsName[bread.name] }}
    </el-breadcrumb-item> -->
    <transition-group mode="out-in">
      <el-breadcrumb-item v-for="breade in breadList" :key="breade.path" :to="breade.path">
        {{ breade.name }}
      </el-breadcrumb-item>
    </transition-group>
    
  </el-breadcrumb>
</template>

<script>
export default {
   data() {
     return {
      breadList: []
     }
   },
  created() {
    this.getBreadList();
  },
  methods: {
    getBreadList() {
      this.breadList = [];
      console.log(this.$route.matched)
      for (const routeInfo of this.$route.matched) {
        console.log(routeInfo.path)
        this.breadList.push( {name:routeInfo.meta.title, path: routeInfo.path} );
      }
    }
  },
  watch: {
    $route:function(newVal,oldVal){
      // this.routerList = newVal.meta.routeList
      this.getBreadList(); 
      // console.log(newVal,oldVal)
      
    }
  }
}
</script>

<style lang="scss" scoped>
.v-enter, v-leave-to {
        opacity:0;
    }
.v-enter-active, v-leave-active{
    transition:opacity 3s;
}
</style>
