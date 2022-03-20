<template>
 <div class="btn-list">
  <el-dropdown size="mini" split-button type="primary" @click="upload">
       导入
   <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>导入</el-dropdown-item>
   </el-dropdown-menu>
  </el-dropdown> 
  <el-dropdown size="mini" split-button type="primary">
       审核
   <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>审核</el-dropdown-item>
   </el-dropdown-menu>
  </el-dropdown> 
  <el-button size="mini" type="primary" @click="updata" v-if="role">新增</el-button>
   <el-button size="mini" type="primary" @click="updata" disabled v-if="role01">新增</el-button>
  <el-dropdown size="mini" split-button type="primary">
      删除
   <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>删除</el-dropdown-item>
   </el-dropdown-menu>
  </el-dropdown> 
 </div>
</template>
<script>
  export default{
    name:"btnlist",
    data(){
      return{

      }
    },
    methods:{
      upload(){
        this.$router.push('/upload');
      },
      updata(){
        this.$router.push('/xinzeng');
      }
    },
    computed:{
      role(){
        if(sessionStorage.getItem('role')=="超级管理员"){
          return true;
        }
        else{
          return false;
        }
      },
       role01(){
        if(sessionStorage.getItem('role')=="超级管理员"){
          return false;
        }
        else{
          return true;
        }
      }
    }
  }
</script>
<style scoped>
.btn-list{
  float: left;
  margin-bottom: 20px;
}
.el-dropdown{
  margin-left: 20px;
}
.el-button{
  margin-left: 20px;
}

</style>