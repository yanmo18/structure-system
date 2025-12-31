<template>
  <video>

  </video>
</template>

<script setup lang="ts">
import Video from 'video.js';
import 'video.js/dist/video-js.css';
import {ref, onMounted,nextTick} from 'vue';
const videoRef = ref<HTMLVideoElement | null>(null);
</script>

<style>

</style>