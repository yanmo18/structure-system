<template>
  <div class="video-container">
    <video 
      :src="videoSrc"
      controls
      autoplay
      muted
      loop
      playsinline
      class="video-player"
    >
      您的浏览器不支持视频播放
    </video>
  </div>
</template>

<script setup lang="ts">
const videoSrc = '@/assets/img/ugc.mp4';
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>