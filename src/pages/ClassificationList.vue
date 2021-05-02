<template>
  <div id="ClassificationList">
    <div class="nav">
      <div @click="routerbank">〈</div>
      <div class="title">资料中心</div>
      <div></div>
    </div>
    <div class="content">
      <div class="left">
        <ul>
          <li
            v-for="(i,index) in ificationList"
            :key="index"
            @click="ChooseClassification(i,index)"
            :class="changeItem==index?'active':''"
          >{{i.category}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="tit wow bounceInUp">分类名称</div>
        <div class="itemlist clear wow bounceInUp">
          <div class="itemdiv" v-for="(item,index) in productList" :key="index" @click="itemDetails(item)">
            <div class="itempic"><img :src="item.productImage" alt=""></div>
            <div class="itemtext">{{item.productName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getproductCategory ,getproductInfo} from "@/api/api.js";

export default {
  name: "ClassificationList",
  data() {
    return {
      searchs: "",
      page: 1,
      limit: 10,
      changeItem: 0,
      ificationList: [],
      productList: []
    };
  },
  created(){
    this.getdata()
  },
  methods: {
    getdata() {
      let parmas = {
        page: this.page,
        limit: this.limit,
        categoryName: '',
      };
      getproductCategory(parmas).then((res)=>{
         if(res.status==200){
          // res.data.data.forEach(item => {
          //   // this.$set(item,'createTime',this.timestampToTime(item.createTime))
          // })
          this.ificationList=res.data.data
          this.ChooseClassification(res.data.data[0].category,0)
        }
        
      });
      
    },
    ChooseClassification(item, index) {
      this.changeItem = index;
      console.log(item,index);
       let parmas = {
        category:item.category,
        page: this.page,
        limit: this.limit,
        categoryName: '',
      };
      getproductInfo(parmas).then(res=>{
        console.log(res);
        
        if(res.status==200){
          // res.data.data.forEach(item => {
          //   // this.$set(item,'createTime',this.timestampToTime(item.createTime))
          // })
          this.productList=res.data.data
        }
      })
      
    },
    itemDetails(item){
      this.$router.push({
        path:"/productDetails",
        query:item
      })
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
  .tit {
    box-sizing: border-box;
    padding: 20px 20px 10px;
    font-weight: 600;
  }
  .content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin-top: 40px;
    display: flex;
    .left {
      /* width: 200px; */
      height: 100%;
      ul {
        /* ma-top: 50px; */
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
      width: 100%;
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
            /* border: 1px black solid; */
            width: 100%;
            height: 70px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .itemtext {
            line-height: 22px;
            overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
            /* transform: scale(0.8); */
            /* text-align: center; */
            /* margin: 10px; */
          }
        }
      }
    }
  }
}
</style>