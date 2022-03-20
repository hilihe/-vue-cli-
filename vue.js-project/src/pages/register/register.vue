<template>
     <div class="registerContainer">
      <div class="registerTitle">注册界面</div>
      <div class="registerForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" size="small"  placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" size="small" placeholder="密码"></el-input>
          </el-form-item>
           <el-form-item prop="qdpassword">
            <el-input v-model="ruleForm.qdpassword" type="password" size="small" placeholder="确定密码"></el-input>
          </el-form-item>
          <div class="register-btn">
            <el-button type="primary" @click="register">注册</el-button>
          </div>
        </el-form>
      </div>
     </div>
</template>
<script>
export default {
        name: 'login',
        data () {
             var validateUname = (rule, value, callback) => {//验证用户名
                if (value === '') {
                callback(new Error('请输入用户名'));
                }
                else {
                callback();
                 }
            };
            var validatePass = (rule, value, callback) => {//验证密码
                if (value === '') {
                callback(new Error('请输入密码'));
                } 
                else {
                callback();
                 }
            };
             var validateQdpass = (rule, value, callback) => {//验证密码
                if (value === '') {
                callback(new Error('请确认密码'));
                } 
                else {
                callback();
                 }
            };
            return {
              tips:'Hello world!',
              ruleForm: {
                username: '',//账号
                password: '',//密码
                qdpassword:'',//确认密码
              },
              rules: {
                username: [
                  {  validator: validateUname,  trigger: 'blur' }//validator验证器
                ],
                password: [
                  {  validator: validatePass,  trigger: 'blur' }
                ],
                 qdpassword: [
                  {  validator: validateQdpass,  trigger: 'blur' }
                ],
              }
            }
        },
      methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            register(){
                if((this.ruleForm.password != this.ruleForm.qdpassword) || this.ruleForm.password ==''){
                    alert('两次密码不一样');
                }
                else{
                    let _this=this;
                    let id;
                    this.$axios.get('http://localhost:3000/users')
                    .then(function(res){
                        id=res.data.length;
                        _this.$axios.post('http://localhost:3000/users',{
                            "id":id+1,
                            "username":_this.ruleForm.username,
                            "password":_this.ruleForm.password,
                            "role":"普通管理员",
                        }).then(function(res){
                            _this.$message({
                                    type: 'success',
                                    message: '注册成功!'
                                });
                            setTimeout(() => {_this.$router.push('/')}, 1000);//1秒后跳转登录页;
                        })
                        .catch(function(err){
                            _this.$message({
                                        type: 'info',
                                        message: '注册失败,请重新注册!'
                                    });          
                        })
                    })
                    .catch(function(err){
                        console.log(err);
                    })
                }
            }
            }
    }
</script>
<style scopde>
    *{
        margin: 0;
        padding: 0;
    }
   .registerContainer{
    position: relative;
    width:100%;
    height:800px;
    background: #24292e;
  }
  .registerForm{
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    padding:40px 40px 0 40px;
    width: 300px;
    /*height:160px;*/
    border-radius: 5px;
    background: #fff;
  }
  .registerTitle{
    position: absolute;
    top:45%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin-top: -150px;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
  }
  .register-btn button{
    width: 100%;
    margin-bottom: 20px;
  }


</style>