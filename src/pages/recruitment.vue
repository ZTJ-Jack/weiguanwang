<template>
  <div>
    <img src="../assets/images/zppic.png" alt="" style="width:100%;display:block;">
    <div class="search">
        <input type="text" placeholder="请输入搜索内容" /><div class="btn">搜索</div>
    </div>
    <div style="padding:10px;" >
        <div  v-for="(item,index) in Datalist" :key="index" @click="showdetail(index)">
            <div style="margin:10px auto;border-left: 5px red solid;background: #fff; padding: 10px 50px 10px 20px;position:relative;">
                <img src="../assets/images/add101.png" alt="" class="jiantou" :class="{select : index == showindex}">
                <div style="display:flex;padding-bottom:5px;">
                    <div style="background:red;padding:2px 5px;color:#fff;width: 30px;text-align: center;">{{item.type}}</div>
                </div>
                <div class="h30">工作职位：<span style="font-size:16px;" >{{item.name}}</span></div>
                <div class="h30">工作地址：<span style="font-size:16px;" >{{item.address}}</span></div>
            </div>
            <div v-if="showindex==index" style="padding:0 20px;color: #999999;">
                <h3>招聘描述：</h3>
                <div class="h31" v-for="(i,ind) in 5" :key="ind"> {{ind}}、职位描述</div>
                <h3>职位要求：</h3> 
                <div class="h31" v-for="(i,ind2) in 5" :key="ind2"> {{ind2}}、职位描述</div>
                <div style="line-height: 30px; background: #666; margin: 10px 0; text-align: center; color: #e8e8e8;">请投递邮箱至：<span>123132132@123.com</span></div>
            </div>
        </div>
        <div></div>
    </div>
  </div>
</template>

<script>
export default {
name:'recruitment',
data() {
    return {
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
   methods: {
    // routerbank() {
    //   this.$router.go(-1);
    // },
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
    text-indent: 1em;line-height: 24px;font-size: 12px;
}



</style>