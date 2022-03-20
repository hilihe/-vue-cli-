<template>
<div id='serach'>
<el-input v-model="input" size='mini' placeholder="请输入内容"></el-input>
<el-button type="primary" size='mini' icon="el-icon-search">搜索</el-button>
</div>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
#serach{
    float: right;
    height: 28px;
    line-height: 28px;
}
.el-input{
    width: 200px;
    margin-right: 10px;
}

</style>