<template>
  <div id="partners">
      <div class="headernav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
      <div class="imgs">
       <van-image
            class="navImg wow lightSpeedIn"
            :src="require('../assets/images/2019712181836.png')"
            fit="heightFix"
        />
       <van-image
            class="navImg wow lightSpeedIn"
            :src="require('../assets/images/2019712182151.jpg')"
            fit="heightFix"
        />
       <van-image
            class="navImg wow lightSpeedIn"
            :src="require('../assets/images/2019712182412.png')"
            fit="heightFix"
        />
       <van-image
            class="navImg wow lightSpeedIn"
            :src="require('../assets/images/2019712182252.png')"
            fit="heightFix"
        />
       <van-image
            class="navImg wow lightSpeedIn"
            :src="require('../assets/images/2019712182450.png')"
            fit="heightFix"
        />
       <van-image
            class="navImg wow lightSpeedIn"
            :src="require('../assets/images/2020325153344.jpg')"
            fit="heightFix"
        />
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        routerbank(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped >
#partners{
    .headernav {
    /* background: #ffffff; */
    position: fixed;
    width: 100%;
    top: 0;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    .title {
      text-align: center;
    }
  }
     background: url("~@/assets/images/1111111.png") center left no-repeat;
     width: 100%;
     min-height: 100vh;
     background-size: 100% 100%;
     display: flex;
     align-items: center;
    .imgs{
         display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .navImg{
            height: 50px;
            margin-bottom: 20px;
            width: 160px;
            vertical-align: top;
        }
    }
}
</style>