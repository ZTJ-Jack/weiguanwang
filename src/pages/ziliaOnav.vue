<template>
  <div id="datacenter">
    <div class="search">
      <input type="text" placeholder="搜索" />
    </div>
    <div class="listdiv" v-for="(item,index) in 5" :key="index">
      <div class="pic">
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/icon8.png')"
              fit="cover"
            />
      </div>
      <div class="main">
        <div>名称名称名称名称名称名称</div>
        <div>2个月前</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ziliaOnv",
  data() {
    return {
      Datalist: []
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped >
#datacenter {
  box-sizing: border-box;
  // margin-top: 90px;
  font-size: 14px;
  background: #ffffff;
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
  .search {
    background: #eee;
    padding: 5px 10px;
    box-sizing: border-box;
    width: 100%;
    input {
      background: #fff;
      height: 30px;
      width: 100%;
      border: none;
      box-sizing: border-box;
      padding-left: 15px;
    }
    input::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #ffffff;
    }
  }
  .listdiv {
    display: flex;
    padding: 10px;
    margin: 10px 15px;
    border-bottom: 1px solid #eeeeee;
    .pic {
        width: 90px;
        height: 72px;
        background: url("~@/assets/images/add107.png") center left no-repeat;
        // background: url("~@/assets/images/assets_cover_back.png") center left no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 5px;
        .navImg{
            width: 100%;
            height: 100%;
        }
    }
    .main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 0;
      flex: 1;
      line-height: 30px;
      color: #888888;
      margin-left: 20px;
    }
  }
}
</style>