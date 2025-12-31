<template>
  <div class="left-bottom">
    <div class="left-bottom-title">
        <h1>成本控制分析</h1></div>
    <!-- 图表 -->
    <div id="main-chart" style="width: 470px;height:300px;"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted} from 'vue';
// 引入 ECharts core package，引入图表
import * as echarts from 'echarts';
const getEcharts=()=>{
    // 基于准备好的dom，初始化echarts实例
    type EChartsOption = echarts.EChartsOption;
var chartDom = document.getElementById('main-chart')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}:{c} ({d}%)'
  },
  // legend: {
  //   top: '5%',
  //   left: 'center'
  // },
  graphic:[{
    type: 'text',
    left: 'center',
    top: '50%',
    style: {
      text: '消除隐患',
      // fontWeight: 'bold',
      fontSize: 24,
      fill: '#16f6fe'
    }
  },{
    type: 'text',
    left: 'center',
    top: '35%',
    style: {
      text: '13/17%',
      // fontWeight: 'bold',
      fontSize: 39,
      fill: '#16f6fe'
    }
  }],
    series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['69s%', '58%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 11,
        // borderColor: '#fff',
        borderWidth: 1
      },
      label: {
        show: true,
        formatter: '{b}:{c} ({d}%)',
        position: 'outer'
      },
      // emphasis: {
      //   label: {
      //     show: true,
      //     fontSize: 40,
      //     fontWeight: 'bold'
      //   }
      // },
      labelLine: {
        show: true,
        length: 30,
        length2: 30,
        lineStyle: {
          color: '#999',
          type: 'solid',
          width: 1,
          
        }
      },
      data: [
        { value: 48, 
          name: 'Engine',
        itemStyle:{
          color:'#ffd700'},
        labelLine:{
          lineStyle:{color:'#ffd700'}
        }
       },
        { value: 48, 
          name: 'Engine',
        itemStyle:{
          color:'#1e90ff'},
          // label:{color:'#999'}
          
       },
       { value: 48, 
          name: 'Engine',
        itemStyle:{
          color:'#1e90ff'},
       },
       { value: 48, 
          name: 'Engine',
        itemStyle:{
          color:'#1e90ff'},
       },
       { value: 48, 
          name: 'Engine',
        itemStyle:{
          color:'#1e90ff'},
       },
       { value: 48, 
          name: '施工材料',
        itemStyle:{
          color:'#1e90ff'},
       },
      ]
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
    margin-top: 20px; 
     top:330px; 
    width: 470px;
    height:300px;
    background:url(../assets/img/015.png) no-repeat;
      background-color: rgba(38, 118, 247, 0.3);
    /* opacity: 0.9; */
    box-sizing: border-box; 
     background-blend-mode: color-burn;
     /* 融合背景图和颜色，要同时设置两个值生效 */
     z-index: 0; 
}
 h1{
  padding-left: 230px;
 }
  .left-bottom-title{
    font-style: italic;
    font-weight: 500;
    font-size: 15px;
    padding:5px 5px;
    background: linear-gradient(to right,#fff,aqua,#fff);
    background-clip:text;
    -webkit-tap-fill-color:transparent;
    text-shadow:10px 0 10px #c0d0d0;
  }
  .main-chart{
    width: 470px;
    height:300px; 
    color: #fff;
  }
</style>