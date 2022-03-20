<template>
<el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
    <el-tab-pane label="用户管理" name="first">
        <el-select v-model="value" placeholder="请选择" size='mini' @change="getdata(value)">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.label"
        >
        </el-option>
        </el-select>
        <div id='mychart' style="width:100%;height:300px"></div>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
        <div id='mychart2' style="width:700px;height:500px;margin:0 auto"></div>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
</el-tabs>  
</template>

<script>
    export default{
        data(){
            return {
                 activeName: 'first',
                  options: [{
                    value: '选项1',
                    label: '公司一'
                    }, {
                    value: '选项2',
                    label: '公司二'
                    }],
                    value: '公司一'
                        }
        },
        mounted(){
            this.getdata("公司一")
            this.drawline2();
        },
        methods:{
        getdata(value){
            let idata=[];
            let cdata=[];
            let text='';
            let _this=this;
            this.$axios.get("http://localhost:3000/companydata")
            .then(function(res){
                text=value+"销量柱状图"
               for(var i=0;i<res.data.length;i++)
               {
                   if(res.data[i].name===value){
                        idata.push(res.data[i].goodstype);//将对应数据添加到对应数组
                        cdata.push(res.data[i].count);
                   }
               }
               _this.drawline(idata,cdata,text);
            })
        },
        handleClick(tab, event) {
        console.log(tab, event);
      },
        drawline(idata,cdata,text){ // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mychart'))
        // 绘制图表
        myChart.setOption({
            title: { text: text },
            tooltip: {},
            xAxis: {
                data:idata
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: cdata
            }]
        });
        },
        drawline2(){
            let myChart2 = this.$echarts.init(document.getElementById('mychart2'))
            myChart2.setOption({
                legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
                }
            },
            series: [
                {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' }
                ]
                }
            ]
                        })
                    }
                }
    }
</script>

<style>
</style>