<template>
     <div class="loginContainer">
      <div class="loginTitle">登录界面</div>
      <div class="loginForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" size="small"  placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" size="small" placeholder="请输入密码"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submit">登录</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:red;display: inline;">Tips:{{tips}}</p>
          <span id='register'>
            <el-button type="text" @click="register">注册</el-button>
          </span>
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
            return {
              tips:'Hello world!',
              ruleForm: {
                username: '',//账号
                password: '',//密码
              },
              rules: {
                username: [
                  {  validator: validateUname,  trigger: 'blur' }//validator验证器
                ],
                password: [
                  {  validator: validatePass,  trigger: 'blur' }
                ],
              }
            }
        },
      methods: {
            submit(){
                let username = this.ruleForm.username;
                let password = this.ruleForm.password;

                let _this=this;
                this.$axios.get('http://localhost:3000/users')
                .then(function(res){
                  for(var item of res.data){
                    if(username==item.username && password==item.password){
                      sessionStorage.setItem("username",username);
                      sessionStorage.setItem("role",item.role);
                      sessionStorage.setItem('id',item.id);
                      sessionStorage.setItem('isLogin', true);
                      sessionStorage.setItem('locale', 'zh');//设置i18n语言，默认中文
                      sessionStorage.setItem("lang",'zh')//设置当前语言，作为标志，切换国旗图片
                      _this.$router.push('/chart');
                    }
                    else{
                        _this.tips="密码或用户名错误!"
                    }
                  }
                })
              .catch(function(err){
                console.log(err);
              })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            register(){
              this.$router.push('/register')
            }
            }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
   .loginContainer{
    position: relative;
    width:100%;
    height:800px;
    background: #24292e;
  }
  .loginForm{
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
  .loginTitle{
    position: absolute;
    top:50%;
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
  .login-btn button{
    width: 100%;
  }
  #register{
    float: right;
  }


</style>