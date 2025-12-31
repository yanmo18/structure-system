<template>
  <div class="right-bottom">
    <div class="right-bottom-title">
        实时监控
        </div>
        <!-- 视频容器 -->
        <video src="@/assets/img/ugc.mp4" autoplay
        muted
        loop
        playsinline>您的浏览器不支持视频播放</video>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.right-bottom {
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
    
    overflow: hidden; /* 防止视频超出容器 */
}

.right-bottom-title {
  font-style: italic;
  font-weight: 700;
  font-size: 26px;
  padding: 15px 90px;
  background: linear-gradient(to right, #fff, aqua, #fff);
  background-clip: text;
  -webkit-tap-fill-color: text;
  color: transparent;
  text-shadow: 10px 0 10px #c0ced0;
}

/* 优化后的视频样式：适配容器，居中显示，无多余边距 */
video {
  /* 视频尺寸适配容器，去掉多余边距 */
  width: 460px;
  height: 230px; /* 适配标题后剩余高度，避免超出容器 */
  display: block; /* 消除inline默认间距 */
  margin: 0 auto; /* 水平居中 */
  padding-top:13px;
  object-fit: cover; /* 保持视频比例，填充容器不拉伸 */
  outline: none; /* 去掉视频默认聚焦边框 */
  border: none; /* 去掉边框 */
}
</style>