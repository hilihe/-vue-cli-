<template>
<div id='transaction'>
        <h3 class="head_title">新增页面</h3>
        <el-button size="mini" type="primary" @click="submit">新增</el-button>
  <div id='container'>
  <el-form label-position="right" label-width="100px" :model="formLabelAlign" size='mini'>
  <div id='left'>
  <el-form-item label="编号">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="平台">
    <el-select v-model="value01" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.label">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="平台订单号">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  </div>
  <div id='right'>
  <el-form-item label="状态">
    <el-select v-model="value02" placeholder="请选择">
    <el-option key="选项一" label="审核" value="审核"></el-option>
    <el-option key="选项二" label="未审核" value="未审核"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="单据类型">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="金额">
    <el-input v-model="formLabelAlign.money"></el-input>
  </el-form-item>
  </div>
</el-form>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        formLabelAlign: {
          name: '',
          region: '平台订单',
          type: '',
          huodong:''
        },
         options: [{
          value: '选项1',
          label: '京东平台'
        }, {
          value: '选项2',
          label: '饿了么'
        }, {
          value: '选项3',
          label: '微信'
        }, {
          value: '选项4',
          label: '拼多多'
        }, {
          value: '选项5',
          label: '美团'
        }],
        value01: '',
        value02: '',
        id:0
      };
    },
    methods:{
      submit(){
        if(this.formLabelAlign.name!='' && this.value01!='' && this.formLabelAlign.type!='' &&this.value01)
        {
          let _this=this;
          this.$axios.get("http://localhost:3000/datalist")
          .then(function(res){
              _this.id=res.data.length;
              _this.$axios.post("http://localhost:3000/datalist",{
                "id":_this.id+1,
                "bianhao":_this.formLabelAlign.name,
                "pingtai":_this.value01,
                "ptdingdai":_this.formLabelAlign.type,
                "money": _this.formLabelAlign.money,
                "status":_this.value02,
                "date": "undefined",
                "duizhang":"未对账",
                "yiduizhang": 0,
                "yongjin": "",
                "jifen": "",
                "ptjuan": "",
                "gsjuan": "",
                "baoxian": "",
                "yunfen": "",
                "jine": "",
                "leixing":_this.formLabelAlign.region
              }).then(function(res){
                _this.$router.push('/transactionFlow')
              })
          })
          .catch(function(err){
            console.log(err)
          })
         }
         else {
           alert('请输入内容!');
         }
      }
    }
  }
</script>

<style scoped>
#container{
  margin-top: 20px;
}
.el-input,.el-select{
  width: 200px;
}
#left,#right{
  display: inline-block;
}
.el-button{
  margin-top: 20px;
  margin-left: 20px;
}
</style>