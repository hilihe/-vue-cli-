import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import axios from 'axios'
import { i18n } from './i18n/index.js' //国际化
 
Vue.prototype.$axios = axios 
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$echarts= echarts;

router.beforeEach((to,from,next)=>{
   if(to.meta.requireAuth){
     if(JSON.parse(sessionStorage.getItem('isLogin'))){
       next();
     }else{
       next({path:'/'})
     }
   }
   else{
     next()
   }
 })
 new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')