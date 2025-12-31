<template>
    <div class="left-center">
        <div class="left-center-title">
            <h1>质量安区管理</h1>
        </div>
        <div class="left-center-main">
            <div class="left-center-main-t">
                <h2>今日出勤人数</h2>
                <div class="people">
                    <img :src="item" alt="" v-for="(item,index) in arr" :key="index">
                    <span>{{ nowPeople }} {{ totalPeople }}</span>
                    <!-- 变量放入双括号 -->
                </div>
            </div>
            <div class="left-center-main-bt">
                <div class="item" v-for="(item,index) in list" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <div>
                        <p>{{ item.name }}</p>
                        <p>
                        <span>{{ item.num }}</span>
                        </p>
                        </div>
                </div>
                </div>
          </div>
      </div>
  
</template>

<script>
    // vue2的写法
    export default {
        data() {
            return {
              //定义了考勤人员的图标
                arr: [],
                //定义了到岗的数量
                nowPeople: 345,
                //定义了总人数
                totalPeople: 444,
                //定义建筑工人与管理人员的数量
                list:[
                  {
                    name:"建筑工人",
                    num:"165",
                    imgUrl:"http://localhost:9091/bigscreen/src/assets/img/011.png",
                    id:1,
                  },
                  {
                    name:"管理人员",
                    num:"45",
                    imgUrl:"http://localhost:9091/bigscreen/src/assets/img/010.png",
                    id:2,
                  }
                ]
            }
        },
        methods:{
          //获取数据
          getList(){
          // 定义第一个图片资源URL
          let r1="http://localhost:9091/bigscreen/src/assets/img/012.png";
          // 定义第二个图片资源URL
          let r2="http://localhost:9091/bigscreen/src/assets/img/013.png";
          // 将图片URL交替存入数组，用于页面展示
          this.arr=[r1,r2,r1,r2,r1,r2,r1,r2]
        }
      },
      //dom元素加载完成的生命周期
      mounted(){
        this.getList();
      }
    }

</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.left-center{
    margin-top: 15px;
    top:330px; 
    width: 470px;
    height:300px;
     background:url(../assets/img/015.png) no-repeat;
      background-color: rgba(38, 118, 247, 0.3);
    /* opacity: 0.8; */
    box-sizing: border-box; 
     background-blend-mode: normal;
     /* 融合背景图和颜色，要同时设置两个值生效 */
     z-index: -1; 
 } 
 h1{
  padding-left: 230px;
 }
  .left-center-title{
    font-style: italic;
    font-weight: 700;
    font-size: 15px;
    padding:22px 10px;
    background: linear-gradient(to right,#fff,aqua,#fff);
    background-clip:text;
    -webkit-tap-fill-color:transparent;
    text-shadow:10px 0 10px #c0ced0;
  }
  .left-center-main{
    padding: 2px 20px 20px 20px;
  }
  .left-center-main-t{
    color: #fff;
  }
  h2{
    padding-left:10px;
    font-family:Georgia, 'Times New Roman', Times, serif;

  }
  .people{
    background:url("../assets/img/014.png") no-repeat;
    background-size: 100% 100%;
    padding:5px;
    display: flex;
    justify-content: space-between;
  }
  .people span{
    color: #2cff2c;
    font-size: 25px;
    font-weight: 700;
    text-shadow: 0px 1px 20px #80ecff;
  }
  .left-center-main-bt{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-span:20px;
   color:#ead7c1;
   margin-top: 10px;
   font-size: 25px;
   font-weight: 700;

  }
  .item{
    display: flex;
  }
  .item img{
    width: 100px;
    height: 70px;
    margin-top: 15px;
  }
  .item div{
    line-height: 40px;
  }
  .item div span{
    font-size: 20px;
    color:#23eef5;
  }
</style>