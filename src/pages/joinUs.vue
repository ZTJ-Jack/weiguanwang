<template>
  <div class="content">
      <img src="../assets/images/bn1.png" alt="">
      <div class="inner">
        <div class="tit">加入我们</div>
        <div class="msg">
            <h4>价值实现</h4>
            <p>成为“工匠” 级优秀人才<br/>不断成长，实现自我价值</p>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fali1.rabbitpre.com%2F0168a184-8b46-4dd2-893d-5e6c22ab4b9f.jpg&refer=http%3A%2F%2Fali1.rabbitpre.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622307352&t=af08440fbf42ca698779c6d60696e7c8" alt="">
        </div>
        <div class="msg">
            <h4>团队助力</h4>
            <p>丰富的团建和实践，提升团队协作力<br/>相互成就，共同成长</p>
            <img src="https://img2.baidu.com/it/u=3606038013,1935322194&fm=26&fmt=auto&gp=0.jpg" alt="">
        </div>
        <div class="msg">
            <h4>工作环境    </h4>
            <p>现代化的办公环境<br/>温馨和谐的工作氛围</p>
            <img src="https://img1.baidu.com/it/u=343550532,2366943205&fm=26&fmt=auto&gp=0.jpg" alt="">
        </div>
        <div class="msg">
            <h4>文化活动</h4>
            <p>丰富的业余生活<br/>多元的企业文化</p>
            <img src="https://img0.baidu.com/it/u=1434395224,473339843&fm=26&fmt=auto&gp=0.jpg" alt="">
        </div>
        <div class="msg">
            <h4>价值实现</h4>
            <p>成为“工匠” 级优秀人才<br/>不断成长，实现自我价值</p>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fali1.rabbitpre.com%2F0168a184-8b46-4dd2-893d-5e6c22ab4b9f.jpg&refer=http%3A%2F%2Fali1.rabbitpre.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622307352&t=af08440fbf42ca698779c6d60696e7c8" alt="">
        </div>
      </div>
      <div class="hotzhiweI">
          <div class="hotzhiweItit">
             <div class="left">招聘职位</div>
             <div class="right" @click="turnto('/recruitment')">查看全部&nbsp;></div>
          </div>
         <div class="li">
             <div class="left">招聘职位</div>
             <div class="right">工作地点</div>
         </div>
         <div class="li">
             <div class="left">软件开发</div>
             <div class="right">西安</div>
         </div>
         <div class="li">
             <div class="left">机床维修服务</div>
             <div class="right">杭州</div>
         </div>
         <div class="li">
             <div class="left">程序员鼓励师</div>
             <div class="right">上海</div>
         </div>
      </div>
   </div>
</template>


<script>
export default {
  data() {
    return {
        
    };
  },
  mounted(){
   
  },
  methods:{
  turnto(urls){
    this.$router.push(urls)
  }
  }
};
</script>

<style lang="scss" scoped>
.hotzhiweI{
    width: 355px;
    padding: 10px;
    background: #ffffff;
    box-sizing: border-box;
    margin: 15px auto;
    .li{
        display: flex;
        justify-content: space-between;line-height: 42px;
        border-bottom: 1px solid #eee;
        font-size: 14px ;
        box-sizing: border-box;
        padding: 0 10px;
        &:last-of-type{
            border-bottom: 0;
        }
        &:nth-of-type(2n){
            background-color: #eee;
        }
    }
    .hotzhiweItit{
        display: flex;
        justify-content: space-between;line-height: 28px;
        height: 28px;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
        padding-top: 5px;

        .left{
            padding-left: 8px;
            font-size: 20px;
            border-left: 4px solid #bf2020;
        }
        .right{
            // font-weight: ;
            font-size: 16px;
            color: #999;
        }
    }
}
    .content{
        overflow: hidden;
        min-height: 100vh;
        padding-bottom: 20px;
        img{
            display: block;
            width: 100%;
        }
        .inner{
            width: 355px;
            margin: -30px auto 0;
            background: #ffffff;
            overflow: hidden;
            box-sizing: border-box;
            padding: 10px 20px;
            z-index: 999;
            position: relative;
        }
    }
    .tit{
        font-size: 24px;
        padding-left: 10px;
        border-left: 4px solid #bf2020;
        margin: 20px 0;
    }
    .msg{
        width: 100%;
        background: #eee;
        padding-top: 15px;
        margin-bottom: 20px;
        h4{
            font-size: 18px;
            line-height: 36px;
            box-sizing: border-box;
            padding: 0 10px;
            margin: 0;
        }
        p{
            font-size: 14px;
            line-height: 24px;
            box-sizing: border-box;
            padding: 0 10px;
            margin: 0;
            
        }
        img{
            padding-top: 10px;
            display: block;
            width: 100%;
        }
    }
</style>