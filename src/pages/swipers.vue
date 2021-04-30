<template>
  <div id="" >
    <div class="headernav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
    <van-swipe :loop="false" :width="300" :height="400">
      <van-swipe-item>
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171105%2Fe2343ce075ee4730aa3e14999e0f8c20.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622183257&t=369c223d3833216a7a2771092f15e8d3" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171105%2Fe2343ce075ee4730aa3e14999e0f8c20.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622183257&t=369c223d3833216a7a2771092f15e8d3" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171105%2Fe2343ce075ee4730aa3e14999e0f8c20.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622183257&t=369c223d3833216a7a2771092f15e8d3" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171105%2Fe2343ce075ee4730aa3e14999e0f8c20.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622183257&t=369c223d3833216a7a2771092f15e8d3" alt="">
        </van-swipe-item>
    </van-swipe>
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171105%2Fe2343ce075ee4730aa3e14999e0f8c20.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622183257&t=369c223d3833216a7a2771092f15e8d3" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201504%2F26%2F20150426152559_sstvH.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622183410&t=f1784ce3200fc4e899f52cec13bcc661" alt="">
        </van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe> -->
    <div class="bot">
        <div>
            Android版本下载
        </div>
        <div>
            IOS版本下载
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "datadetails",
  data() {
    return {
      Datalist: []
    };
  },
  methods: {
    routerbank() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped >
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
    z-index:999999;
    .title {
      text-align: center;
    }
  }
.my-swipe{
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 400px;
    text-align: center;
    background-color: #39a9ed;
    img{
      width:100%;
      height:100%;
      border-radius:10px;
    }
  } 
}
.bot{
    background-color:#444;
    color:#fff;
    display: flex;
    flex-direction:column;
    // justify-content: center;
    align-items: center;
    margin-top:20px;
    padding:20px 0;
    div{
        border:1px solid #fff;
        width:80%;
        height:50px;
        line-height:52px;
        text-align: center;
        font-size:18px;
        border-radius:20px;
        font-weight:600;
    }
    div:nth-child(1){
        background-color: #fff;
        color:#000;
        margin-bottom:10px;
    }
}
</style>