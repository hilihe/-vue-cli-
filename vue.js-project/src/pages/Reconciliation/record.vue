<template>
    <div id="record">
        <h3 style="margin-bottom:30px">收款对账</h3>
         <template>
        <el-row>
          <el-button size="mini" type="primary" @click="changeDisabled" :disabled="!disabled">收款对账</el-button>
          <el-button size="mini" type="primary" @click="changeDisabled" :disabled="disabled">退款对账</el-button>
        </el-row>
      </template>
      <template>
          <el-row :gutter="20">
            <el-col :span="12">
                <el-card class="box-card">
                    <h3>参数选择</h3>
                     <el-form :model="form" id="canshu">
                      <el-form-item>
                       平台: <el-select size="small" v-model="form.platform" multiple collapse-tags placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                     <el-form-item>
                      业务录入时间: <el-date-picker
                        size="small"
                        v-model="form.time"
                        type="date"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                      自动产生对账记录的对账日期为: <el-date-picker
                        size="small"
                        v-model="form.time"
                        type="date"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :span="12">
                 <el-card class="box-card">
                      <h3 style="margin-bottom:30px">规则选择</h3>
                      <el-form>
                          <el-form-item>
                            <el-checkbox-group v-model="form.type">
                                <el-row>
                                    <el-col :span="12"><el-checkbox label="规则一" name="type" checked></el-checkbox></el-col>
                                    <el-col :span="12"><el-checkbox label="规则二" name="type"></el-checkbox></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12"><el-checkbox label="规则三" name="type"></el-checkbox></el-col>
                                    <el-col :span="12"><el-checkbox label="规则四" name="type"></el-checkbox></el-col>
                                </el-row>
                            </el-checkbox-group>
                         </el-form-item>
                      </el-form>
                </el-card>
            </el-col>
        </el-row>
      </template>
       <div class="execute-btn">
          <el-button size="small" @click="clickAuto" type="primary">执行对账</el-button>
          <el-button size="small" type="primary">退出</el-button>
      </div>
    </div>
</template>

<script>
    export default{
        name:'record',
        data(){
            return{
                disabled:true,
                form: {
                time: '',
                platform:'',
                type:[],
              },
              options: [{
                value: '1',
                label: '支付宝'
              }, {
                value: '2',
                label: '微信'
              }, {
                value: '3',
                label: '天猫'
              }, {
                value: '5',
                label: '京东'
              }, {
                value: '9',
                label: '美团'
              }],
            }
        },
        methods:{
            changeDisabled(){
                 this.disabled = !this.disabled;
            },
            clickAuto(){
            if (this.form.platform == '') {
              this.$message.error({message:"请选择平台"});
              return false
            }
            if (this.form.time === '') {
              this.$message.error({message:"请选择业务日期"});
              return false
            }
            if (this.rulesId === '') {
              this.$message.error({message:"请选择对账规则"});
              return false;
            }
            this.$alert('已添加', '提示', {
               confirmButtonText: '确定',
            });
           }
          }
        }
</script>
<style scoped>
#canshu{
    display: flex;
    flex-direction:column;
    align-items:flex-end;
}
.el-select{
    width: 220px;
}
.el-button{
    margin-bottom: 20px;
}
.execute-btn{
    margin-top:10px;
    margin-left: 45%;
    
}
</style>