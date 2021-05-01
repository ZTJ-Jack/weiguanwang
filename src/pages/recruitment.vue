<template>
  <div>
    <div class="headernav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
    <img src="../assets/images/zppic.png" alt="" style="width:100%;display:block;">
    
    <div class="search">
        <input type="text" v-model="searchs" placeholder="请输入搜索内容" /><div class="btn" @click="search">搜索</div>
    </div>
    <div style="padding:10px;" >
        <div  v-for="(item,index) in Datalist" :key="index" @click.stop="showdetail(index)">
            <div style="margin:10px auto;border-left: 5px red solid;background: #fff; padding: 10px 50px 10px 20px;position:relative;">
                <img src="../assets/images/add101.png" alt="" class="jiantou" :class="{select : index == showindex}">
                <div style="display:flex;padding-bottom:5px;">
                    <span style="background:red;padding:2px 5px;color:#fff;text-align: center;">{{item.showFlag }}</span>
                </div>
                <div class="h30">工作职位：<span style="font-size:14px;" >{{item.positionName }}</span></div>
                <div class="h30">工作地址：<span style="font-size:14px;" >{{item.address}}</span></div>
            </div>
            <div v-if="showindex==index" style="padding:0 20px;color: #999999;">
                <h3>招聘描述：</h3>
                <div class="h31" >{{item.description}}</div>
                <h3>职位要求：</h3> 
                <div class="h31" > {{item.requirement }}</div>
                <div style="line-height: 30px; background: #666; margin: 10px 0; text-align: center; color: #e8e8e8;">请投递邮箱至：<span>{{item.contact}}</span></div>
            </div>
        </div>
        <div @click="LoadMore" style="text-align:center;">{{LoadMoreText}}</div>
    </div>
  </div>
</template>

<script>
import {getpositionInfo} from "@/api/api.js";
export default {
name:'recruitment',
data() {
    return {
      LoadMoreText:"加载更多",
      searchs:'',
      page:1,
      limit:10,
        showindex:-1,
      Datalist: [
          {type:'NEW',name:'前端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'展会',name:'vue工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'NEW',name:'后端工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'},
          {type:'展会',name:'react工程师',time:'2021-22-21',address:'杭州',SeatNumber:'2-001'}
      ]
    };
  },
  created(){
    this.getdata()
  },
   methods: {
    routerbank() {
      this.$router.go(-1);
    },
    LoadMore(){
      this.LoadMoreText='加载中...'
      this.page++
      this.getdata()
    },
    search(){
      this.page=1
      this.getdata()
    },
    getdata(){
       let parmas = {
          page: this.page,
          limit: this.limit,
          positionName: this.searchs,
          address: this.searchs,
        };
        getpositionInfo(parmas).then(res=>{
          console.log(res);
          
          if(res.status==200&&res.data.data.length>0){
          // res.data.data.forEach(item => {
          //   // this.$set(item,'createTime',this.timestampToTime(item.createTime))
          // })
          this.Datalist=[...res.data.data];
          this.LoadMoreText='加载更多'
        }else{
          this.LoadMoreText='没有更多数据了'
        }
        })
    },
    showdetail(index){
      if(this.showindex==index){
        this.showindex=-1
      }else{
        this.showindex=index
      }
    }
  }
}
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
    .title {
      text-align: center;
    }
  }
.jiantou{
  position: absolute;
  right: 20px;
  top: 50%;
  width: 30px;
  height: 16px;
  margin-top: -8px;
  transition: all 0.3s;
  &.select{
    transform: rotate(180deg);
  }
}
.search {
    background: #eee;
    border-bottom: 1px solid #dedede;
    padding: 5px 10px;
    /* position: fixed; */
    box-sizing: border-box;
    width: 100%;
    /* top: 40px; */
    display: flex;
    input {
      height: 30px;
      width: 100%;
      color: #333;
      border: none;
      box-sizing: border-box;
      padding-left: 15px;
    }
    input::-webkit-input-placeholder {
      color: #999;
    }
    .btn{
      width: 50px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
      // color: #ffffff;
    }
  }
.h30{
    line-height: 30px;font-size: 12px;color: #999999;
}
.h31{
    text-indent: 1em;line-height: 20px;font-size: 12px;
}



</style>