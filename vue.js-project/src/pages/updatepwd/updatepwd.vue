<template>
<div id='updatepwd'>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="原密码" prop="oldpass">
    <el-input type="password" v-model="ruleForm.oldpass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="新密码" prop="newpass">
    <el-input type="password" v-model="ruleForm.newpass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkpass">
    <el-input v-model="ruleForm.checkpass"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="updata">提交</el-button>
  </el-form-item>
</el-form>
</div>
</template>


<script>
  export default {
    data() {
      var validateoldPass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入原密码'));
        }
      };
      var validatenewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkpass');
          }
          callback();
        }
      };
      var checkpass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newpass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          oldpass: '',
          newpass: '',
          checkpass: ''
        },
        rules: {
          oldpass: [
            { validator: validateoldPass, trigger: 'blur' }
          ],
          newpass: [
            { validator: validatenewPass, trigger: 'blur' }
          ],
          checkpass: [
            { validator: checkpass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      updata(){
        let _this=this;
        let username=sessionStorage.getItem('username');
        let id=parseInt(sessionStorage.getItem('id'));
        this.$axios.get("http://localhost:3000/users")
        .then(function(res){
          let newid=res.data[res.data.length-1].id;//获取最后的id
          _this.$axios.post('http://localhost:3000/users',{//相当于在原始数据增加一个id为最后一位用户id+1的新用户,但除id外其他数据都是当前用户的数据,间接实现了密码的更改
            "id":newid+1,
            "username":username,
            "password":_this.ruleForm.newpass,
            "role":sessionStorage.getItem('role')//确定当前用户的权限
          })
          .then(function(res){
            _this.$axios.delete('http://localhost:3000/users/'+id)//删除原来的数据
            _this.$message({
            type: 'success',
            message: '修改成功,请重新登录!'
          });
          setTimeout(() => {
            sessionStorage.setItem("lang", "");
            sessionStorage.setItem("locale", "");//i8n语言清空
             _this.$i18n.locale='zh';//退出时设置I18N默认为中文，防止上一次为英文退出
             sessionStorage.setItem("username", "");
             sessionStorage.setItem("isLogin",false);
            _this.$router.push('/')
            },1000);
          })
          .catch(function(err){
            _this.$message({
            type: 'info',
            message: '修改异常'
          });         
          })
        })
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
#updatepwd{
    background: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 0 1px 3px rgb(26 26 26 / 10%);
    box-shadow: 0 1px 3px rgb(26 26 26 / 10%);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px 20px 10px;
}
.el-form-item{
    margin-top: 22px;
    width: 30%;
    padding-left: 25%;
}
</style>