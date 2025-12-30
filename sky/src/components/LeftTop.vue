<template>
  <div class="left-top">
    <div class="left-t-title">
      <p>项目进度监控</p>
      </div>
    <div class="left-t-main">
        <div class="left-t-main-t">
          <!-- 指令v-for,生成谁就将v-for写在谁的身上 ，循环遍历生成某个结构 -->
        <div class="money" v-for="(item,index) in arr" :key="index">
            <!-- <p>工程造价（万）</p>
             <p>486876.5</p>
        </div>
        <div class="money">
            <p>工程工期（天）</p>
             <p>486876.5</p>
        </div>
        <div class="money">
            <p>工程规模（平方）</p>
             <p>486876.5</p> -->
        <p>{{ item.name }}</p>
        <p>{{ item.num }}</p>
         </div> 
      </div>
      <div class="left-t-main-bt">
        <div class="company" v-for="(company,index) in arr2" :key="index">
          <!-- <p>施工单位</p>
          <p>北京中建</p>
        </div>
         <div class="company">
          <p>监管单位</p>
          <p>山东中建</p>
        </div>
         <div class="company">
          <p>材料单位</p>
          <p>湖北中建</p>
        </div>
         <div class="company">
          <p>财务部门</p>
          <p>大连中建</p>
        </div> 
        <div class="company">
          <p>运维单位</p>
          <p>河南中建</p>-->
        <p>{{ company.name }}</p>
        <p>{{ company.num }}</p>
        </div> 
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
  // vue3的新特性  setup(){} 
  //如何传入真实数据
  import {ref} from'vue';
  const arr=ref([{
    name:"工程造价",
    num:486,
  },
  {
    name:"工程工期",
    num:486,
  },
  {
    name:"工程规模",
    num:486,
  },
])
  const arr2=ref([{
    name:"施工单位",
    num:"中国的无线建筑集团"
  },
  {
    name:"施工单位",
    num:"中国集团有限公司"
  },
  {
    name:"施工单位",
    num:"中国建筑非常有限公司"
  },
  {
    name:"施工单位",
    num:"中国建筑无限的公司"
  },
  ])
</script>

<style scoped>
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  .left-top{
    /* position: absolute; */
    /* 脱离了文档流，绝对定位，导致不再去占用页面空间 */
    /* top:20px;left:-20px; */
    margin-top:25px ;
    width: 470px;
    height: 300px;
    background:url(../assets/img/006.png) no-repeat;
   
    background-color: #b9bcda;
    box-sizing: border-box;
    background-blend-mode: color-burn;
     z-index:-1;
  } 
  .left-t-title{
    font-style: italic;
    font-weight: 700;
    font-size: 20px;
    padding:18px 90px;
    background: linear-gradient(to right,#fff,aqua,#fff);
    background-clip:text;
    -webkit-tap-fill-color:transparent;
    text-shadow:10px 0 10px #c0ced0;
  }
  .left-t-title p{
    margin-left: 100px;
    padding-left:10px;
    font-size: 23px;
    color: #bff0f8;
  }
  .left-t-main{
    display: grid;
    grid-template-rows: 1fr 2fr;
  }
  .left-t-main-t{
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .money p:nth-child(n){
    padding-top:2px;
    width: 100px;
  }
  .money p:nth-child(1){
    color:#d8d6d1;

  }
  .money p:nth-child(2){
    font-size: 25px;
    color:#dad7d7;
    font-weight: 700;
    text-shadow: 0 6px 10px #9ee0ea;
  }
  .left-t-main-bt{
    display: flex;
     /* 换行显示 */
    flex-wrap: wrap;
    justify-content:space-around;
    gap:15px;
    
    margin-top:10px;
  }
  .company p:nth-child(1){
    color:#f2fcb7;
    margin-bottom: 10px;
  }
  .company p:nth-child(2){
    margin-top: 20px;
    padding-left:5px;
  }
</style>>