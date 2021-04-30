<template>
  <div id="partners">
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

}
</script>

<style lang="scss" scoped >
#partners{
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