import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login/login.vue'
import Home from '../pages/home/index.vue'
import Chart from '../components/charts/charts.vue'
import TransactionFlow from '../pages/tables/transactionflow.vue'
import Updatepwd from '../pages/updatepwd/updatepwd.vue'
import Upload from '../pages/upload/upload.vue'
import Xinzeng from '../pages/xinzeng/xinzeng.vue'
import Register from '../pages/register/register.vue'
import Error from '../pages/error/errorpage.vue'
import Bankrecords from '../pages/tables/bankrecords.vue'
import Perinfo from '../pages/personalinfo/personalinfo.vue'
import Record from '../pages/Reconciliation/record.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/index',
    name: 'home',
    component: Home,
    meta:{requireAuth: true},
    children:[
    {
    path: '/chart',
    name: 'chart',
    component: Chart,
    meta:{requireAuth: true},
    },
    {
      path: '/transactionFlow',
      name:'TransactionFlow',
      component: TransactionFlow,
      meta:{requireAuth: true},
    },
    {
      path: '/updatepwd',
      name:'updatepwd',
      component: Updatepwd,
      meta:{requireAuth: true},
    },
    {
      path: '/upload',
      name:'upload',
      component: Upload,
      meta:{requireAuth: true},
    },
    {
      path: '/xinzeng',
      name:'Xinzeng',
      component: Xinzeng,
      meta:{requireAuth: true},
    },
    {
      path: '/error',
      name:'Error',
      component: Error,
      meta:{requireAuth: true},
    },
    {
      path: '/bankrecords',
      name:'Bankrecords',
      component: Bankrecords,
      meta:{requireAuth: true},
    },
    {
      path: '/personalinfo',
      name:'Perinfo',
      component: Perinfo,
      meta:{requireAuth: true},
    },
    {
      path: '/record',
      name:'record',
      component: Record,
      meta:{requireAuth: true},
    },
    
  ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
