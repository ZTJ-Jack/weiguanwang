<template>
  <div id="datacenter">
     <div class="nav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
    <!-- <div class="search">
      <input type="text" placeholder="搜索" />
    </div> -->
    <div class="listdiv" v-for="(item,index) in Datalist" :key="index" @click="itemDetails(item)">
      <div class="pic"><img :src="item.materialLogo" alt=""></div>
      <div class="main">
        <div>{{item.category}}</div>
        <div>{{item.createTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getmaterial } from "@/api/api.js";
export default {
  name: "datacenter",
  data() {
    return {
      page:1,
      limit:1,
      Datalist: []
    };
  },
  created(){
    this.getdata()
  },
  methods: {
     timestampToTime(timestamp) {
        var date = new Date(timestamp ); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = this.change(date.getDate()) + ' ';
        let h = this.change(date.getHours()) + ':';
        let m = this.change(date.getMinutes()) + ':';
        let s = this.change(date.getSeconds());
        return Y + M + D + h + m + s;
    },
    change(t) {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    },
    getdata(){
      let parmas={
        start:this.page,
        length:this.limit,
        materialName:this.$route.query.materialName,
        category:this.$route.query.category,
      }
      getmaterial(parmas).then(res=>{
        console.log(res);
        if(res.status==200){
          res.data.data.forEach(item => {
            this.$set(item,'createTime',this.timestampToTime(item.createTime))
          })
          this.Datalist=res.data.data
        }
        
      })
    },
    itemDetails(item){
      this.$router.push({
        path:'/DataDetails',
        query:item
      })
    },
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
    margin-top: 40px;
    border-bottom: 1px solid #eeeeee;
    .pic {
      width: 80px;
      height: 80px;
      /* border: 1px black solid; */
      img{
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