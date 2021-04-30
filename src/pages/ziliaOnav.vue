<template>
  <div id="datacenter">
    <div class="nav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
    <div class="search">
      <input type="text" v-model="searchs" placeholder="搜索" />
    </div>
    <div class="listdiv" v-for="(item,index) in Datalist" :key="index" @click="itemDetails(item)">
      <div class="pic">
            <van-image
              class="navImg wow lightSpeedIn"
              :src="require('../assets/images/icon8.png')"
              fit="cover"
            />  
      </div>
      <div class="main">
        <!-- {{item}} -->
        <div>{{item.category}}</div>
        <div>2个月前</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getmaterialCategory } from "@/api/api.js";

export default {
  name: "ziliaOnv",
  data() {
    return {
      searchs:'',
      Datalist: []
    };
  },
  created(){
    this.getdata()
  },
  methods: {
    getdata(){
      let parmas ={
        category:this.searchs
      }
      getmaterialCategory(parmas).then(res=>{
        console.log(res);
        
        if(res.status==200){
          this.Datalist=res.data.data
        }
        // console.log(res.data);
      })
    },
    itemDetails(item){
      this.$router.push({
        path:'/DataCenter',
        query:{
          materialName:item.description,
          category:item.category,
        }
      })
    },
    routerbank() {
      this.$router.go(-1);
    }
  },
  watch: {
        searchs: function (newVal, oldVal) {
            console.log("newVal:", newVal);
            console.log("oldVal:", oldVal);
            if(newVal){
              this.searchs=newVal
              this.getdata()
            }
        }
    },
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