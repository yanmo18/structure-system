<template>
  <div>
    <div class="center-bottom">
        <img src="@/assets/img/018.png" alt="">
    <div>
    <img src="@/assets/img/016.png" alt="">
    <img src="@/assets/img/019.png" alt="">
    <img src="@/assets/img/020.png" alt="">
</div>

<img src="@/assets/img/017.png" alt="">
</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.center-bottom{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.center-bottom img{
    width: 50px;
    height: 50px;
}
.center-bottom div img{
    width: 80px;
    height: 120px;
    
}

</style>