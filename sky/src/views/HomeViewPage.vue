<template>
  <!-- main -->
  <div class="main"> 
    <!-- 标题 -->
    <div class="header">欢迎您登录delamain管理平台</div>
    <!-- 副标题 -->
    <div class="welcome">welcome user</div>
    <!-- 登陆表单区域 -->
    <div class="login-box">
      <!-- 用户名的输入框 -->
      <a-input class="ipt" placeholder="请输入用户名" v-model:value="loginForm.username">
        <template #prefix>
          <div class="ipt-befort">用户名</div>
        </template>
      </a-input>
      <!-- 密码的输入框 -->
      <a-input-password class="ipt" placeholder="请输入密码" v-model:value="loginForm.password">
        <!-- 输入框前标签 -->
        <template #prefix>
          <div class="ipt-befort">密码</div>
        </template>
      </a-input-password>
      <!-- 验证码输入框 -->
      <div class="code">
      <a-input class="ipt" placeholder="请输入验证码" v-model:value="loginForm.code">
        <template #prefix>
          <div class="ipt-befort">验证码</div>
        </template>
      </a-input>
      <!-- 验证码图片 -->
      <div @click="getCode()">{{ verfyCode }}</div>
      <!-- click绑定了事件 -->
      </div>
      <!-- 登录按钮 -->
      <a-button class="btn" type="primary" size="large" @click="login()">登录</a-button>
      <!-- @绑定一个点击方法 -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref,onMounted} from 'vue';
  // onmounted生命周期钩子
  import { message} from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  const router=useRouter();

//登录表单
const loginForm=ref({
  // 用户名
  username:'',
  //密码
  password:'',
  //验证码
  code:''
});
//登陆方法
const login=()=>{
  if(!loginForm.value.username){
    message.warning('用户名不能为空');
    return;
  }
  if(!loginForm.value.password){
    message.warning('密码不能为空');
    return;
  }
  if(!loginForm.value.code){
    message.warning('验证码不能为空');
    return;
  }
  if(loginForm.value.username !="lgt"){
    message.error('用户名不存在');
    return;
  }
  if(loginForm.value.password !="123456"){
    message.error('密码错误');
    return;
  }
  // 判断验证码是否正确，忽略大小写，toUpperCase转大写
  if(loginForm.value.code.toUpperCase() !==verfyCode.value.toUpperCase()){
    message.error('验证码错误');
    getCode();//重新生成验证码
    loginForm.value.code='';//清空输入框
    return;
  }
    message.success('登录成功');
    //跳转到中间页
    router.push('/middle');

}

//验证码
const verfyCode=ref('');
//随机生成验证码方法
const getCode=()=>{
  let val='';
  const codeLength=4;//验证码长度
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';//验证码字符集
  for(let i=0;i<codeLength;i++){
    //math.floor向下取整，math.random生成1-0随机数，不包括1。
    val += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  verfyCode.value=val;
}
//页面加载时的生命周期
onMounted(()=>{
  getCode();
  //绑定试点，点击验证码重新生成
});
</script>

<style>
/* 全局 */
body{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    /* 可视区域宽度vw,vh可视区域高度 ,hidden超出隐藏*/
    overflow: hidden;
}
.ant-input{
  background-color:#cdcdcd00 !important;
  color: #7d3eeb !important;
  font-weight: 600;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
 /* 自定义字体 */
    @font-face{
      font-family:'my-font';
      /* 使用@font-face指令制作字体 */
      src:url('@/assets/font-family/Splat-Attack-2.otf');
    }
</style>
// 只做用于当前页面
<style scoped>
.main{
    min-height:100vh;
    width: 100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    display: flex;
    background: url("@/assets/img/004.png")no-repeat center center;
    background-size: cover;
    padding: 20px;
    box-sizing:border-box;
    }
.header{
        font-size: 32px;
        font-weight: 800;
        font-style:oblique;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background: linear-gradient(to left,#036dee,rgb(212, 250, 168) ,rgb(168, 217, 236));
        background-clip: text;
        -webkit-background-clip:text;
        /* 设置背景颜色，将文字扣出，设置字体颜色为透明 */
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 10px rgba(11, 231, 247, 0.8);
        margin-bottom:10px;
    }
.welcome{
        font-size: 30px;
        font-style:oblique;
        font-weight: 500;
        margin-bottom: 30px;
        font-family:'my-font';
         background: linear-gradient(135deg, #ff7700, #00f5ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        /* text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); */
        text-shadow: 0 0 10px #05eeff, 0 0 20px #04474f;
    }
    .login-box{
        width: 100%;
        max-width: 420px;
        height: 350px;
        padding: 80px 30px 30px;
        box-sizing: border-box;
        background: url('../assets/img/003.png') no-repeat center center;
        background-size: cover;
        box-shadow: 0 4px 20px rgba(99, 111, 111, 0.6); 
        border-radius: 10px;
        gap:20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }
    .ipt-befort{
      width: 90px;
      color:rgb(30, 31, 29);
      font-weight: 500;
      text-align:center;
      flex-shrink: 0;
      /* 防止标签被压缩 */
    }
    .ipt{
      
      /* 颜色混合模式，更柔和 */
      background:linear-gradient(45deg,#9aecf5,#7df9ff,#78ff7a,#f57aed);
      background-blend-mode:soft-light;
      border:0 !important;
      border-radius: 0;
      padding:10px 15px 10px 30px; /* 优化内边距 */
      /* 形成平行四边形,优化裁剪比例 */
      clip-path:polygon(5% 0,100% 0,95% 100%,0% 100%);
      /* 增加输入框内边距容错，避免文字被裁剪 */
      box-sizing: border-box;
      width: 100%;
      max-width: 320px;
       /* 输入框文字颜色（可自定义） */
      color: #00f5ff !important;
        /* 可选：添加霓虹内阴影，增强赛博感 */
      box-shadow: 0 0 10px rgba(3, 109, 238, 0.2) inset, 
                0 1px 0 rgba(0, 245, 255, 0.3);
       /* 渐变背景动画（可选，增强赛博感） */
       /* 背景拉伸到200%，为滑动留空间 */
        background-size: 200% 100%;
        /* 核心：添加过渡，让背景位置变化更舒缓 */
        /* 时长1.5s（越长越缓），ease-in-out是“慢-快-慢”，最自然 */
        transition: background-position 1.5s ease-in-out;
        animation: input-gradient 5s linear infinite;
    }
    /* 输入框渐变动画 */
      @keyframes input-gradient {
        0% {background-position: 0% 20%; }
        25% {background-position: 100% 50%; }
        75% {background-position: 50% 100%; }
        100% {background-position: 20% 0%; }
      }

    .btn{
      width: 100%;
      max-width: 320px;
      padding: 10px 0;
       text-align: center;
      /* 增加按钮 hover 效果 */
      transition: all 0.3s ease;
      border-radius: 0;
      border:0;
      clip-path: polygon(5% 0,100% 0,95% 100%,0% 100%);
      font-weight: 800;
      margin-top:10px;
      background: linear-gradient(45deg, #a956e8b0, #00f5ff, #dfff60) !important;
      color: #0a1929 !important; /* 深色文字（无白） */
      background-size: 200% 100%;
      animation: btn-gradient 3s linear infinite;
      transition: all 1s ease;
    }
    @keyframes btn-gradient {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    .btn:hover {
      /* 按钮 hover 霓虹效果 */
      box-shadow: 0 0 15px rgba(125, 249, 255, 0.8);
      transform: translateY(-2px);
    }
    .code{
      display: flex;
      gap:10px;
      align-content: center;
      width: 100%;
      max-width: 320px;
    }
    .code>div{
      width: 100px;
      background:linear-gradient(45deg,#9aecf5,#7df9ff,#f47fec,#f57aed);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
      /* 指针变小手 */
      transition: all 0.3s ease;
    }
    
</style>