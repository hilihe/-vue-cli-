<template>
<div id='info'>
    <el-descriptions title="开发信息" direction="vertical" :column="4" border>
  <el-descriptions-item label="系统类型">后台管理系统</el-descriptions-item>
  <el-descriptions-item label="主要技术">vue/vue cli/echarts/axios/i18n/js等等</el-descriptions-item>
  <el-descriptions-item label="开发环境" :span="2">vscode</el-descriptions-item>
  <el-descriptions-item label="备注">
  <el-tag size="small">学习</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道1188 号</el-descriptions-item>
  <el-descriptions-item label="联系方式">
      <img :src="url01" class="img01" @mouseover="show01" @mouseout="show03">
      <img :src="url02" class="img02" @mouseover="show02" @mouseout="show04">
  </el-descriptions-item>
    </el-descriptions>
    <div id='twowm'>
        <img :src="url03" id="img03" style="display:none">
        <img :src="url04" id="img04" style="display:none">
    </div>
</div>
</template>
<script>
    export default{
        data(){
            return{
                url01:require('@/assets/qq.png'),
                url02:require('@/assets/weixin.png'),
                url03:require('@/assets/qq2wm.png'),
                url04:require('@/assets/weixin2wm.png')
            }
        },
        methods:{
            show01(){
                document.getElementById('img03').style.display='block';
            },
            show02(){
                document.getElementById('img04').style.display='block';
            },
            show03(){
                document.getElementById('img03').style.display='none';
            },
            show04(){
                document.getElementById('img04').style.display='none';
            }
        }
    }
</script>
<style scoped>
.img01,.img02{
    width: 25px;
    height: 25px;
    border-radius: 10px;
    margin-left:10px;
}
.img01:hover{
    cursor: pointer;
}
.img02:hover{
    cursor: pointer;
}
#twowm img{
    float: right;
    width: 100px;
    height: 100px;
    margin-left: 30px;
}
#twowm{
    margin-right: 170px;
}
</style>