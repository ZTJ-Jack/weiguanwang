<template>
  <div id="datacenter" style="height:100vh;background:black;">
    
    <div class="nav">
      <div @click="routerbank">1</div>
      <div class="title">资料详情</div>
      <div>...</div>
    </div>
    <div style="color: #fff;">
      详情数据
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
#datacenter {
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
}
</style>