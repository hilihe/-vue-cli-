<template>
    <el-container>
  <el-header style="padding:0"><Header></Header></el-header>
  <el-container>
    <el-aside width="201px"><sidebar></sidebar></el-aside>
    <el-container>
      <el-main>
      <div class="container">
        <router-view></router-view>
      </div>
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import Header from '../../components/head/head.vue'
import Sidebar from '../../components/sidebar/sidebar.vue'
    export default{
        name:'Home',
        components:{
            Header,
            Sidebar
        }
    }
</script>

<style>
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align:left;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>