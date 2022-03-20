<template>
<header class="head">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" >
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">
      <h3>{{ $t("h.system") }}</h3>
    </div>

    <div class="company">
    <template >
      <el-select v-model="companyValue" placeholder="请选择"  size="small" >
        <el-option
          v-for="(item,index) in companyList"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </template>
    </div>
    <div>
      <p style="margin-left:50px">
        欢迎:{{username}}
      </p>
    </div>
    <div class="top-nav">
      <!--全屏显示-->
      <template>
        <el-tooltip class="full" effect="dark"  placement="bottom" content="全屏显示">
          <div>
            <i class="el-icon-rank"></i>
          </div>
        </el-tooltip>
      </template>

      <!--消息中心-->
      <template>
        <el-tooltip class="news" effect="dark"  placement="bottom" content="你有未读信息">
          <div>
            <i class="el-icon-bell"></i>
            <span class="msg" v-if="message"></span>
          </div>
        </el-tooltip>
      </template>
      <!--退出or设置-->
      <template>
        <el-dropdown placement="bottom">
          <span class="el-dropdown-link">
            <i class="el-icon-setting el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="info">关于我</el-dropdown-item>
            <el-dropdown-item >设置</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <template>
        <div class="full">
          <span class="lan" @click="changelan"> 
            <el-avatar :src="url"></el-avatar><!--小头像-->
          </span>
        </div>
      </template>
      </template>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        url:(sessionStorage.getItem("lang")=='zh')?require('@/assets/zh.jpg'):require('@/assets/en.jpg'),//通过判断当前语言。切换图片地址
        language:sessionStorage.getItem("lang"),
        username:sessionStorage.getItem("username")+sessionStorage.getItem("role"),
        companyValue:'',
        message:1,//消息
//              companyValue:null,
              companyList:[
                {
                  value: '选项1',
                  label:'公司一',
                },
                {
                  value: '选项2',
                  label:'公司二',
                }
              ],
      };
    },
    methods: {
      info(){
          this.$router.push('/personalinfo');
      },
      logout(){//注销
        sessionStorage.setItem("lang", "");
        sessionStorage.setItem("locale", "");//i8n语言清空
        this.$i18n.locale='zh';//退出时设置I18N默认为中文，防止上一次为英文退出
        sessionStorage.setItem("username", "");
        sessionStorage.setItem("isLogin",false);
        this.$router.push('/');
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changelan(){//切换对应语言
        if(this.language=='zh'){
        sessionStorage.setItem("lang", "en");
        sessionStorage.setItem("locale", "en");
        this.$i18n.locale = sessionStorage.getItem("locale");//设置i18n的语言
          this.$message({
                  message: "Switch to English!",
                  type: "success"
                });
              setTimeout(function(){
                location.reload();  
              },1000)//一秒后进行页面刷新，主要目的使侧边栏语言改变
        }
        else{
        sessionStorage.setItem("lang", "zh");
        sessionStorage.setItem("locale", "zh");
        this.$i18n.locale = sessionStorage.getItem("locale");
           this.$message({
                  message: "切换为中文!",
                  type: "success"
                });
                setTimeout(function(){
                location.reload();  
              },1000)
        }
      }
    }
  }
</script>
<style scoped>
   .el-avatar,.el-avatar--circle{
     margin-top: 10px;
   }
  
</style>