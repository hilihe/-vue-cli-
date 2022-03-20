<template>
  <el-tabs type="border-card">
  <el-tab-pane v-for="(item,index) in tabs" :label="item.label" :key="index"></el-tab-pane>
</el-tabs>
</template>

<script>
    export default{
        data(){
            return {
                tabs:[
                    {'label':'用户管理'},
                    {'label':'配置管理'},
                    {'label':'角色管理'},
                    {'label':'定时任务补偿'},
                ]
            }
        }
    }
</script>