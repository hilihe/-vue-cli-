<template>
    <div id="sidebar-left">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#24292e"
        text-color="#fff"
        active-text-color="#fff"
        unique-opened router>
        <template v-for="(item) in sidebarInfo">
            <el-submenu :index="item.index" :key="item.index" v-if="item.subNav">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <el-menu-item :index="list.index" v-for="(list) in item.subNav" :key="list.index">{{list.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.index" :key="item.index" v-else>
              <template>
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
            </el-menu-item>
        </template>
      </el-menu>

    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        data () {
            return {
              sidebarInfo:[//左侧导航条信息
                {
                  icon: 'el-icon-setting',
                  index: '/chart',
                  title: this.$t("h.home")
                },
                /**
                 * inquiry 原始单据
                 * **/
                {
                  icon: 'el-icon-tickets',
                  index:'1',
                  title: this.$t("h.invoice"),
                  subNav:[
                    {
                      index:'/transactionFlow',
                      title:'交易流水'
                    },
                    {
                      index:sessionStorage.getItem('role')=='超级管理员'?'/xinzeng':'/error',
                      title:'新增页面',
                    },
                  ]
                },
                /**
                 * verifyPlatform 对账平台
                 * **/
                {
                  icon: 'el-icon-date',
                  index:'2',
                  title: this.$t("h.recordplatform"),
                  subNav:[
                    {
                      index: '/record',
                      title: '收款对账'
                    }
                  ]
                },
                /**
                 * verifyRecord 对账记录
                 * **/
                {
                  icon: 'el-icon-goods',
                  title: this.$t("h.record"),
                  index:'3',
                  subNav:[
                    {
                      index:'',
                      title:'收款记录'
                    },
                    {
                      index:'/bankrecords',
                      title:'银行记录'
                    }
                  ]
                },
                /**
                 * reportForms报表
                 * **/
                {
                  icon: 'el-icon-star-off',
                  title: this.$t("h.form"),
                  index:'',
                },
                {
                  icon: 'el-icon-more',
                  title: this.$t("h.setting"),
                  index:'4',
                  subNav:[
                    {
                      index:'/personalinfo',
                      title:'个人信息'
                    },
                    {
                      index:'/updatepwd',
                      title:'修改密码'
                    }
                  ]
                },
              ]
            }
        },
    }
</script>
<style >



</style>