<template>
  <div id="ClassificationList">
    <!-- <div class="nav">
      <div @click="routerbank">1</div>
      <div class="title">资料中心</div>
      <div>...</div>
    </div> -->
    <div class="content">
      <div class="left">
        <ul>
          <li
            v-for="(i,index) in ificationList"
            :key="index"
            @click="ChooseClassification(i,index)"
            :class="changeItem==index?'active':''"
          >{{i.name}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="tit wow bounceInUp">分类名称</div>
        <div class="itemlist clear wow bounceInUp">
          <div class="itemdiv" v-for="(item,index) in 20" :key="index">
            <div class="itempic"></div>
            <div class="itemtext">12222</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassificationList",
  data() {
    return {
      changeItem: 0,
      ificationList: [
        { name: "分类名称" },
        { name: "分类2" },
        { name: "分类3" },
        { name: "分类4" },
        { name: "分类5" },
        
      ]
    };
  },
  methods: {
    ChooseClassification(item, index) {
      this.changeItem = index;
    },
    routerbank() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
#ClassificationList {
  position: relative;
  height: 100vh;
  box-sizing: border-box;
 .tit{
   box-sizing: border-box;
   padding: 20px 20px 10px;
   font-weight: 600;
 }
  .content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* margin-top: 40px; */
    display: flex;
    .left {
      /* width: 200px; */
      height: 100%;
      ul {
          width: 100px;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
        li {
          line-height: 40px;
          padding: 5px 0;
          background: #eeeeee;
          width: 100%;
          text-align: center;
          border-left: 3px #eeeeee solid;

        }
        .active {
          line-height: 40px;
          background: #fff;
          text-align: center;
          border-left: 3px red solid;
        }
      }
    }
    .right {
      /* height: 100%; */
          background: #fff;
         overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
      .itemlist {
        width: 100%;
        /* height: 200px; */
        padding: 5px 20px;
          box-sizing: border-box;

        /* margin: 5px; */
        .clear::after {
          clear: both;
          display: block;
          content: "";
        }
        .itemdiv {
          float: left;
          width: 28%;
          /* height: 120px; */
          box-sizing: border-box;
          margin: 5px 6px;
          .itempic {
            border: 1px black solid;
            width: 100%;
            height: 70px;
          }
          .itemtext {
            line-height: 30px;
            text-align: center;
            /* margin: 10px; */
          }
        }
      }
    }
  }
}
</style>