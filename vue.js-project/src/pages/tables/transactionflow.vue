<template>
<div id='transaction'>
      <div class="head_search">
        <h3 class="head_title">交易流水</h3>
        <serach></serach>
      </div>
    <div id='container'>
    <el-tabs type="border-card">
    <btnList></btnList><!--按钮组件-->
  <el-tab-pane label="全部">
    <el-table
    ref="multipleTable"
    border
    :data="AfterChangeData"
    tooltip-effect="dark"
    style="width: 100%"
    max-height=500
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="bianhao"
        label="编号"
        width="150"
        height='30px'>
      </el-table-column>
      <el-table-column
        prop="pingtai"
        label="平台"
        width="150">
      </el-table-column>
      <el-table-column
        prop="ptdingdai"
        label="平台订单号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="money"
        label="平台金额"
        width="150">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="审核时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="duizhang"
        label="对账情况"
        width="150">
      </el-table-column>
      <el-table-column
        prop="yiduizhang"
        label="已对账"
        width="150">
      </el-table-column>
       <el-table-column
        prop="yongjin"
        label="佣金"
        width="150">
      </el-table-column>
       <el-table-column
        prop="jifen"
        label="积分"
        width="150">
      </el-table-column>
       <el-table-column
        prop="ptjuan"
        label="平台优惠劵"
        width="150">
      </el-table-column>
       <el-table-column
        prop="gsjuan"
        label="公司优惠券"
        width="150">
      </el-table-column>
       <el-table-column
        prop="baoxian"
        label="保险"
        width="150">
      </el-table-column>
       <el-table-column
        prop="yunfen"
        label="运费"
        width="150">
      </el-table-column>
       <el-table-column
        prop="id"
        label="买家支付金额"
        width="150">
      </el-table-column>
       <el-table-column
        prop="leixing"
        label="单据类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作"
        width="150"
        v-if="role=='超级管理员'">
      <template slot-scope="scope">
        <el-button @click="delClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
      <el-table-column
        prop=""
        label="操作"
        width="150"
        v-if="role!='超级管理员'">
      <template>
        <el-button @click="root" type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
  </el-table>
  </el-tab-pane>
  <el-tab-pane label="已对账"></el-tab-pane>
  <el-tab-pane label="部分对账"></el-tab-pane>
  <el-tab-pane label="未对账"></el-tab-pane>
</el-tabs>
<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="26">
</el-pagination>
</div>
</div>
</template>

<script>
import btnList from '../../components/btnlist/btnlist.vue'
import serach from '../../components/serach/serach.vue'
  export default {
    components:{
        btnList,
        serach,
    },
    data() {
      return {
        tableData: [],//axios获取的数据（原始数组）
        multipleSelection: [],
        pageNo: 1, //当前页
        pageSize: 10, //每页显示条目数
        role:sessionStorage.getItem('role')
      }
    },
    computed: {//实现分页的计算属性
    AfterChangeData() {
        let start = (this.pageNo - 1) * this.pageSize;
        let end = this.pageNo * this.pageSize;
        return this.tableData.slice(start, end)//经过调整后的数据
    }
  },
    mounted(){
      this.getshuju();//挂载后将数据获取到tableDate数组
      },
    methods: {
      //分页大小改变，即每页显示的条数
      handleSizeChange(val) {
        this.pageSize = val;
      },
      //当前页数改变，当页数改变时
      handleCurrentChange(val) {
        this.pageNo = val;
     },
      getshuju(){
        let _this=this;
        this.$axios.get(" http://localhost:3000/datalist")
        .then(function(res){
          _this.tableData=res.data
        })
        .catch(function(err){
          console.log(err);
        })
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      delClick(row){//删除功能
        let _this=this;
         this.$confirm('此操作将永久删除该行, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => { 
        _this.$axios.delete("http://localhost:3000/datalist/"+row.id)
        .then(function(res){
          //刷新表格
        _this.getshuju();
        //删除成功提示
        _this.$message({
          type: 'success',
            message: '删除成功!'
            })
        })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      root(){//权限检测
           this.$message.error('抱歉,当前用户没有权限哦!');
      }
    }
  }

</script>

<style scoped>
    .head_title{
        margin-bottom: 30px;
        display: inline-block;
    }
</style>