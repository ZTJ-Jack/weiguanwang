<template>
  <div class="main">
     <div class="headernav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
      <div class="conter wow bounceIn" v-for="(item,index) in 5" :key="index">
          <div class="left">
              <div>嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿</div>
              <div class="smol">2021-08-20</div>
          </div>
          <div class="right">
              <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" alt="">
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
    background: #ffffff;
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
.main{
  background: #fff;
  overflow: hidden;
}
    .conter{
        display:flex;
        margin:10px;
        padding:10px;
        margin-top: 40px;
        border-bottom: 1px solid #eee;
        .left{
            flex:1;
            margin-right:10px;
            div{
                font-size:16px;
                line-height: 20px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .smol{
                font-size:12px;
                line-height: 20px;
                padding-top: 10px;
                color:#666;
            }
        }
        .right{
            width:120px;
            height:70px;
         
            img{
                width:100%;
                height:100%;
            }
        }
    }
</style>