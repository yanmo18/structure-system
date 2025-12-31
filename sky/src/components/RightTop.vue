<template>
  <div class="right-top">
    <div class="right-top-title">绿色施工</div>
    <div class="right-top-main">
      <div class="right-top-main-top">
        <img src="../assets/weather/153.png" alt="">
        <div class="temp">2℃</div>
        <div class="location">
          <p>泰安 晴</p>
          <p>17/23℃</p>
        </div>
      </div>
      <div class="right-top-main-center">
        <div class="info">
          <div class="info-title">温度</div>
          <img src="../assets/weather/温度.png" alt="">
          <div class="info-content">
            <span>2</span>℃
          </div>
        </div>
        <div class="info">
          <div class="info-title">风速</div>
          <img src="../assets/weather/风速.png" alt="">
          <div class="info-content">
            <span>12</span>m/s
          </div>
        </div>
        <div class="info">
          <div class="info-title">噪音</div>
          <img src="../assets/weather/噪音.png" alt="">
          <div class="info-content">
            <span>120</span>dB
          </div>
        </div>
        <div class="info">
          <div class="info-title">风向</div>
          <img src="../assets/weather/风向.png" alt="">
          <div class="info-content">
            <span>东北</span>风
          </div>
        </div>
      </div>
      <!-- 天气图表 -->
      <div ref="weatherEcharts" class="weather-echarts" ></div>
      <div class="rigth-top-main-bottom">
        <div class="seven">
          <img src="../assets/weather/512.png" alt="">
          <p>雾霾</p>
          <p>1-1</p>
        </div>
        <div class="seven">
          <img src="../assets/weather/100.png" alt="">
          <p>晴</p>
          <p>1-2</p>
        </div>
        <div class="seven">
          <img src="../assets/weather/513.png" alt="">
          <p>雾</p>
          <p>1-3</p>
        </div>
        <div class="seven">
          <img src="../assets/weather/102.png" alt="">
          <p>阴天</p>
          <p>1-4</p>
        </div>
        <div class="seven">
          <img src="../assets/weather/102.png" alt="">
          <p>阴</p>
          <p>1-5</p>
        </div>
        <div class="seven">
          <img src="../assets/weather/101.png" alt="">
          <p>多云</p>
          <p>1-6</p>
        </div>
        <div class="seven">
          <img src="../assets/weather/101.png" alt="">
          <p>多云</p>
          <p>1-7</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
//导入echarts
import * as echarts from 'echarts'
const weatherEcharts = ref(null);
const getWeather = () => {
  type EChartsOption = echarts.EChartsOption;

  const myChart = echarts.init(weatherEcharts.value)

  const option: EChartsOption = {
    title: {
      text: 'Temperature Week',
      textStyle: {
      color: '#fff', // 标题文字颜色
      fontSize: 15,      // 可选：调整标题字号，增强视觉效果
    },
    top:'-6px'// 标题位置调整，使其靠近顶部

    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top:'5px',// 图例位置调整，使其靠近标题下方
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      },
      top:'2px'// 工具栏位置调整，使其靠近顶部
    },
     // 核心：grid控制图表的边距，让图表占满容器
  grid: {
    left: '2%',   // 左内边距
    right: '2%',  // 右内边距
    top: '5px',  // 上边距（给标题/图例留空间）
    bottom: '1%',// 下边距
    containLabel: true // 确保坐标轴标签不被截断
  },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
      color: '#fff' // 适配深色背景
    }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C',
         color: '#fff' // 适配深色背景
      },
      // 核心：限制纵轴范围，让坐标轴变矮（原数据范围大，现在缩小）
    min: -1,    // 纵轴最小值
    max: 7,     // 纵轴最大值（原是13，现在改小，坐标轴直接变短）
    interval: 2 // 刻度间隔（每2度一个刻度，减少刻度数量）
    },
    series: [
      {
        name: 'Highest',
        type: 'line',
        data: [4, 5, 7, 5, 6, 6, 3],
        // 最高温折线颜色：改为橙色
      lineStyle: {
        color: '#fff', // 折线颜色
        width: 2          // 可选：调整折线粗细
      },
      // 可选：调整折线点的颜色（和折线同色）
      itemStyle: {
        color: '#FF7F0E'
      },
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'Lowest',
        type: 'line',
        data: [0, -1, 1, 3, 1, 1, -1],
         // 最低温折线颜色：改为青绿色
      lineStyle: {
        color: '#2CA02C',
        width: 2
      },
      // 折线点颜色和折线同色
      itemStyle: {
        color: '#2CA02C'
      },
        markPoint: {
          data: [{ name: '周最低', value: -1, xAxis: 1, yAxis: -1 }]
        },
        markLine: {
          data: [
            { type: 'average', name: 'Avg' },
            [
              {
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              },
              {
                symbol: 'circle',
                label: {
                  position: 'start',
                  formatter: 'Max'
                },
                type: 'max',
                name: '最高点'
              }
            ]
          ]
        }
      }
    ]
  }
  option && myChart.setOption(option);

}
onMounted(() => {
  getWeather()
})


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.right-top {
  height: 580px;
  /* background-size: 100% 100%; */
  background: url("@/assets/img/021.png") no-repeat;
  background-color: rgba(38, 118, 247, 0.3);
}

.right-top-title {
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  padding: 25px 90px;
  background: linear-gradient(to right, #fff, aqua, #fff);
  background-clip: text;
  -webkit-tap-fill-color: transparent;
  text-shadow: 10px 0 10px #c0ced0;
}

.right-top-main {
  height: 460px;
  display: grid;
  grid-template-rows: 3fr 4fr 4fr 2fr;
  padding: 0 20px;
}

.right-top-main-top {
  display: flex;
  color: #fff;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
}

.right-top-main-top img {
  width: 70px;
  height: 70px;
}

.temp {
  font-size: 34px;
  font-weight: 700;
  text-shadow: hoff voff blur #000;
}

.location {
  color: #ccc;
  line-height: 30px;
}

.right-top-main-center {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
}

.info {
  height: 110px;
  border: 1px solid #063ba5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info img {
  padding: 15px 0 0 0;
  width: 25px;
}

.info-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #0d75d75a;
  color: #fff;
  text-align: center;
}
.info-content {
  line-height: 40px;
  color: #b9b8b8;
  font-weight: 800;
}
.info-content span {
  font-size: 19px;
  color: #fff;
  font-weight: 700;
}
.weather-echarts {
  height: 100px;
  width: 100%;
}
.rigth-top-main-bottom{
  display:grid;
  grid-template-columns: repeat(7,1fr);
  column-gap: 8px;
}
.seven{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:5px;
}
.seven img{
  width: 32px;
  vertical-align: middle;
}

</style>