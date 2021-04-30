<template>
  <div id="datacenter">
    <!-- <div class="search">
      <input type="text" placeholder="搜索" />
    </div> -->
    <div class="listdiv" v-for="(item,index) in 15" :key="index">
      <div class="pic"></div>
      <div class="main">
        <div>名称名称名称名称名称名称</div>
        <div>2个月前</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "datacenter",
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
    background: rgb(31, 30, 30);
    padding: 5px 10px;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    top: 40px;
    input {
      background: rgb(71, 64, 95);
      height: 30px;
      width: 100%;
      color: #ffffff;
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
      width: 80px;
      height: 80px;
      border: 1px black solid;
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