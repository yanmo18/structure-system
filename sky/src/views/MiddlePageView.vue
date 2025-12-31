<template>
   <!-- 主容器 -->
 <div class="main">
  <Container>
  <!-- top -->
  <div class="top">
    <div class="date">
      {{date}} {{ day }}
    </div>
    <p class="title">delamain</p>
    <div class="time">{{ time }}</div>
  </div>
  <!-- middle -->
  <div class="middle">
    <div class="left">
      <LeftTop></LeftTop>
      <!-- 应用导入的组件 -->
      <LeftCenter></LeftCenter>
      <LeftBottom></LeftBottom>
    </div>
    <div class="center">
      <Content3d></Content3d>
    <CenterBottom></CenterBottom>
    </div>
    <div class="right">
      <RightTop></RightTop>
      <Rightbottom></Rightbottom>
    </div>
    </div>
 </Container>
 </div>
</template>

<script setup lang="ts">
  import Container from '@/components/Container.vue';
  // 导入3d地球组件
  import Content3d from '@/components/Content3d.vue';
  // 导入左上组件
  import LeftTop from '@/components/LeftTop.vue';
  // 导入左中角组件
   import LeftCenter from '@/components/LeftCenter.vue';
   // 导入左下角组件
  import LeftBottom from'@/components/LeftBottom.vue'
 //导入中下
 import CenterBottom from '@/components/CenterBottom.vue';
 //导入右上
import RightTop from '@/components/RightTop.vue';
  //导入右下
  import Rightbottom from '@/components/Rightbottom.vue';
  import {onBeforeUnmount, onMounted,ref} from "vue";


  // 定义时间变量
  const time=ref("");
  const date =ref("");
  const day = ref("");
// 获取当前时间的方法
const getDateTime =()=>{
  const now =new Date();
  const year=now.getFullYear();
  const month=now.getMonth()+1;
  const dateNum=now.getDate();

  // padStart补全时分秒两位数，（2，‘0’）确保是两位数，tostring数字类型转化为字符串,获取时分秒
  const hours=now.getHours().toString().padStart(2,'0');
  const minutes=now.getMinutes().toString().padStart(2,'0');
  const seconds=now.getSeconds().toString().padStart(2,'0');
// 获取周几
  const days=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  const dayOfWeek=days[now.getDay()];

  date.value=`${year}年${month}月${dateNum}日`;
  day.value=dayOfWeek;
  time.value=`${hours}:${minutes}:${seconds}`;
  console.log(time.value);
}
// 调用获取时间的方法
let timer :any =null;
onMounted(()=>{
  getDateTime();
  timer = setInterval(getDateTime,1000);
  //定时器，每隔一秒获取时间，setInterval内的第二个值是毫秒
})
onBeforeUnmount(()=>{
  clearInterval(timer);
  // 清除定时器当页面关闭时
})
  //引入组件
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .main{
    width: 100%;
    height: 100vh;
    position: relative;
    background:url("@/assets/img/005.png")no-repeat center;
    
  }
  .top{
    width:100%;
    height: 100px;
    color:rgba(255, 1, 44, 0.822);
    min-height: 80px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    display: flex;
    /* 两端对齐 */
    justify-content: space-between;
    /* align-items: center; */
    background-size: cover;
    line-height: 50px;
    padding:10px 0;
    }
    /* 自定义字体 */
    @font-face{
      font-family:'my-font';
      /* 使用@font-face指令制作字体 */
      src:url('@/assets/font-family/Splat-Attack-2.otf');
    }
  .title{
    height: 100px;
    margin-right: 140px;
 /* 蓝紫绿渐变霓虹 + 流光动画 */
    font-family: 'my-font', sans-serif;
    margin-top:40px;
    padding-top:10px;
    font-size: 4.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: linear-gradient(90deg, #00f5ff, #9d00ff, #00ff9d);
    background-size: 1000% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: cyber-flow 3s ease-in-out infinite;
  
}

@keyframes cyber-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.date,.time{
  font-size: 20px;
  font-weight: 600;
  text-shadow: 0 0 8px #00f5ff,0 0 20px #00ff9d;
  /* 文字发光效果 */
}
  .middle{
    width: 100%;
    background-size: border-box;
    margin:0 auto;
    top:40px;
    right: 0;
    left: 0;
    bottom: 0;
    position:fixed;
    display:grid;
    padding:10px;
    box-sizing:border-box;
    /* 网格布局 ,1:2:1*/
    grid-template-columns: 2fr 5fr 2fr;
    color: white;
    gap: 20px;
    /* gap间距是20px */
}
.left{
  display: grid;
  grid-template-rows: repeat(3,1fr);
  /* 均分为三部分 */
  gap:10px;
  box-sizing: border-box;
}
.center{
  background-size: 700px;
  position: relative;
  background-position: center;

}
.right{
  display:grid;
  /* 右侧右上：右下=3:2 */
  grid-template-rows: 3fr 2fr ;
  gap:20px; 
}

</style>