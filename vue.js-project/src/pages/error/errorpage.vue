<template>
    <el-result title="401" subTitle="抱歉,没有权限">
  <template slot="icon">
    <el-image :src="url"></el-image>
  </template>
  <template slot="extra">
    <el-button type="primary" size="medium">返回</el-button>
  </template>
   </el-result>
</template>
<script>
    export default{
        data(){
            return {
                url:require('@/assets/404.png')
            }
        }
    }
</script>