<template>
  <div class="left-bottom">
    <div class="left-bottom-title">
        <h1>成本控制分析</h1></div>
    <!-- 图表 -->
    <div id="main" style="width: 470px;height:250px;"></div>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted} from 'vue';
// 引入 ECharts core package，引入图表
import * as echarts from 'echarts';
const getEcharts=()=>{
    // 基于准备好的dom，初始化echarts实例
    type EChartsOption = echarts.EChartsOption;
var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
option && myChart.setOption(option);
}
onMounted(() => {   
    //onMounted是Vue3的生命周期函数，表示在组件挂载后执行
    getEcharts();
});

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.left-bottom{
     top:330px; 
    width: 470px;
    height:300px;
    background:url(../assets/img/009.png) no-repeat;
    background-color: rgba(170, 168, 241, 0.5);
    opacity: 0.8;
    box-sizing: border-box; 
     background-blend-mode: color-burn;
     /* 融合背景图和颜色，要同时设置两个值生效 */
     z-index: -1; 
}
 h1{
  padding-left: 230px;
 }
  .left-bottom-title{
    font-style: italic;
    font-weight: 700;
    font-size: 15px;
    padding:22px 10px;
    background: linear-gradient(to right,#fff,aqua,#fff);
    background-clip:text;
    -webkit-tap-fill-color:transparent;
    text-shadow:10px 0 10px #c0ced0;
  }
</style>