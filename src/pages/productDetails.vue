<template>
  <div id="productDetails" style="height:100vh;">
    
    <div class="nav">
      <div @click="routerbank">〈</div>
      <div class="title">资料详情</div>
      <div></div>
    </div>
    <div style="color: #fff;">
      

    </div>
    <iframe class="vh" :src="$route.query.productUrl" width="100%" height="94%">
       
</iframe>
  </div>
</template>

<script>
export default {
  name: "productDetails",
  data() {
    return {
      Datalist: []
    };
  },
  created(){
      console.log(this.$route.query);
      
  },
  methods: {
    routerbank() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped >
#productDetails {
  box-sizing: border-box;
  margin-top: 40px;
  font-size: 14px;
  
  /* background: #ffffff; */
  /* padding: 0 10px; */
  position: relative;
  .nav {
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
  .vh{
    height:"100vh"
    
  }
}
</style>