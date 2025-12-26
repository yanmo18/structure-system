<template>
    <div v-bind:style="styleObject" class="scale-box">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import debounce from "lodash.debounce";
import { ref, defineProps, computed, onMounted, onBeforeUnmount } from "vue";
// 结构出来宽高
let { width, height } = defineProps({
    width: {
        type: Number,
        // 默认为浏览器可视区宽度
        default: 1920,
    },
    height: {
        type: Number,
        // 默认为浏览器可视区高度
        default: 1080,
    },
});
// 默认缩放比例是1
let scale = ref(1);
let getScale = () => {
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
};

let styleObject = computed(() => {
    let obj = {
        transform: `scale(${scale.value}) translate(-50%, -50%)`,
        WebkitTransform: `scale(${scale.value}) translate(-50%, -50%)`,
        width: width + "px",
        height: height + "px",
    };
    return obj;
});
let setScale = debounce(() => {
    // 获取到缩放比，设置它
    scale.value = getScale();
}, 300);

onMounted(() => {
    setScale()
    // 当窗口发生改变的时候
    window.onresize = setScale;
    window.addEventListener("resize", setScale);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", setScale);
})
</script>
<style scoped lang="scss">
.scale-box {
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: 0.3s;
    // 默认垂直水平居中
    transform: translate(-50%, -50%);
}
</style>