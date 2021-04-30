<template>
  <!-- <section id="app"> -->
  <div class="container">
    <div class="loadingBox">
      <van-image
        class="loadingImg wow lightSpeedIn"
        :src="require('../assets/images/icon1.jpg')"
        fit="cover"
      />
      <img
        v-if="!showNav"
        class="imgstest wow bounceInUp"
        :src="require('../assets/images/icon10.png')"
        alt=""
        @click="changSHow()"
      />
    </div>
    <div class="loadingBox wow bounceIn loadingUp" v-if="showNav">
      <div class="innerbox">
        <div class="list">
          <router-link class="one" :to="{path:'/card'}">
            <span>公司新闻</span>
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/icon4.png')"
              fit="cover"
            />
          </router-link>
          <!-- <a href="/MarketActivity" class="one">公司新闻</a> -->
          <a href="" class="two">
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/pic1.png')"
              fit="cover"
            />
          </a>
          <a href="" class="two">
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/pic2.png')"
              fit="cover"
            />
          </a>
          <a href="" class="two">
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/pic1.png')"
              fit="cover"
            />
          </a>
          <router-link class="one" :to="{path:'/MarketActivity'}">
            <span>市场活动</span>
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/icon5.png')"
              fit="cover"
            />
          </router-link>
          <router-link class="one" :to="{path:'/recruitment'}">
            <span>招聘信息</span>
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/icon6.png')"
              fit="cover"
            />
          </router-link>
          <a href="" class="two">
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/logo1.png')"
              fit="cover"
            />
          </a>
          <router-link class="one" :to="{path:'/ClassificationList'}">
            <span>产品中心</span>
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/icon8.png')"
              fit="cover"
            />
          </router-link>
          <router-link class="three" :to="{path:'/partners'}">
            <span>合作伙伴</span>
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/pic5@3x.png')"
              fit="cover"
            />
          </router-link>
         
          <a href="" class="two">
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/pic4.jpg')"
              fit="cover"
            />
          </a>
           <router-link class="one" :to="{path:'/datacenter'}">
            <span>资源下载</span>
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/icon9.png')"
              fit="cover"
            />
          </router-link>
          <router-link href="" class="three" :to="{path:'/swipers'}" >
            <span>售后服务</span>
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/pic7@3x.png')"
              fit="cover"
            />
          </router-link>
        </div>
        <div class="navTxt">
          <router-link :to="{path:'/About'}">关于我们</router-link>
          <a href="javascript:;" @click="hah()">我的二维码</a>
          <router-link :to="{path:'/ContactUs'}">联系我们</router-link>
        </div>
      </div>
    </div>
   <div class="bg wow lightSpeedIn" v-if="show" @click="show = false" ></div>
   <div class="erCode wow lightSpeedIn" v-if="show"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1.hdfimg.com%2Fg8%2FM07%2FF3%2F55%2FtoYBAGBN-8GAFhCxAAAD9f6VmJ4867.png%3F_ms_%3D0f94&refer=http%3A%2F%2Fn1.hdfimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622217156&t=0bf989d81ae38357f10936bbf9536376" alt=""></div>
  </div>
  <!-- </section> -->
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      show:false,
    };
  },
  mounted(){
    if(sessionStorage.getItem("lastname")){
      this.showNav = true
    }else{
      setTimeout(()=>{
        this.showNav = true
        sessionStorage.setItem("lastname",true)
      }, 2000);
    }
  },
  methods:{
    hah(){
      console.log(11111111)
      this.show = true
    },
    changSHow(){
      this.showNav = true
      sessionStorage.setItem("lastname",true)
    }
  }
};
</script>

<style lang="scss" scoped>
.bg{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba($color: #000000, $alpha: 0.5);
}
.erCode{
  width: 150px;
  height: 150px;
  border: 5px solid #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -75px;
  margin-top: -75px;
  z-index: 999;
  img{
    width: 100%;
    height: 100%;
  }
}
.loadingUp {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("~@/assets/images/icon3.png") top center no-repeat;
  background-size: 100% 100%;
  z-index: 11;
  .innerbox {
    box-sizing: border-box;
    padding: 20px 32.5px;
    width: 100%;
    height: 100%;
    .list {
      width: 100%;
      height: 426px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      a {
        width: 94px;
        height: 94px;
        box-sizing: border-box;
        border: 1px solid #eee;
        margin-bottom: 10px;
        color:#fff;
        display:flex;
        align-items:flex-end;
        font-size:14px;
        position: relative;
         &.one {
          padding-left:6px;
          padding-bottom:6px;
          .navImg {
            width: 25%;
            height: 30%;
            position: absolute;
            top:10px;
            right:6px;
          }
        }
        &.two {
          .navImg {
            width: 100%;
            height: 100%;
          }
        }
        &.three {
          span{
            position:absolute;
            left:6px;
            bottom:6px;
            z-index:66;
          }
        }
      }
    }
    .navTxt {
      display: flex;
      justify-content: space-between;
      width: 100%;
      a {
        width: 94px;
        box-sizing: border-box;
        line-height: 32px;
        height: 32px;
        font-size: 14px;
        text-align: center;
        border: 1px solid #eee;
        outline: none;
        color: #fff;
        background: rgba($color: #ffffff, $alpha: 0.2);
      }
    }
  }
}
.loadingBox {
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
z-index: 9;
    .loadingImg {
        width: 100%;
        height: 100%;
    }
}
.imgstest {
    position: absolute;
    width: 40px;
    left: 50%;
    margin-left: -20px;
    height: 40px;
    z-index: 9;
    bottom: 80px;
    opacity: 0.6;
    animation: mymove 1s infinite;
}
@keyframes mymove {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.3); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.3);
  }
}
</style>

