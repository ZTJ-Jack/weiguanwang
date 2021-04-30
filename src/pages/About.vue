<template>
  <div>
    <div class="headernav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
    <img src="http://www.zhrobot888.com/skins/224557/images/bn11.jpg" alt="" class="headerpic">
    <div class="main">
      <div class="main-content">
        <h2>发展与历史</h2>
        <div
          class="main-content-text"
        > 上海哲宏机器人自动化有限公司(前身上海哲宏机电有限公司,成立于2009年)位于上海市嘉定工业区（近F1国际赛车场）,是一家数控设备配电整体解决方案及附件研发销售为一体的生产高科技公司。 长期以来，哲宏公司凭借经验丰富的技术研发团队，严谨的生产团队，优质高效的服务团队赢得了客户的广泛赞誉。
哲宏人坚持“质量赢得市场，诚信铸就哲宏”的管理理念，并以不断创新、持续发展、快速响应、降低客户成本为已任，与广大客户协同进步成长。
上海哲宏期待与您真诚合作，携手创造美好的未来!
</div>
        <div class="morebtn" @click="navto('/CompanyProfile')">More ></div>
      </div>
      <img src="../assets/images/ny_banner.png" class="pic" alt="">
      <!-- <div class="tonav">
        <div>公司介绍</div>
        <div>FA事业在中国</div>
        <div>三菱电机在中国</div>
      </div> -->
      <div class="main-content">
        <h2>企业理念</h2>
        <div class="main-content-text">三菱电机集团致力于提高技术、服务、创造力，为实现充满活力和富裕的社会做出贡献。</div>
        <div class="morebtn" @click="navto('/qiyelilian')">More ></div>
        <img class="pic" src="../assets/images/add105.png" alt="">
      </div>
      <div style="width:100%;height:10px"></div>
    </div>
    <div class="Sociology">
      <div>社会责任</div>
      <div>
        三菱电机集团作为满足社会需求和信赖的良好企业公民,有效活用资源，与员工一起，为建
        设富裕社会做贡献。<br/>在社会福利、地球环境保护的领域,进行反映
        社会需求、根植地域的活动。<br/>通过对科学技术、文化艺术、体育的支援活
        动，进行培育下一代的活动。
      </div>
      <div class="morebtn2" @click="navto('/details')">More ></div>
    </div>
    <div class="main">
      <img class="headerpic" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1434395224,473339843&fm=26&gp=0.jpg" alt="">
         <div class="main-content">
             <h2>加入我们</h2>
             <div class="main-content-text">
                 我们正在寻觅有长远发展抱负，且具有潜质的高素质人才加入我们的团队。
             </div>
            <div class="morebtn" @click="navto('/joinUs')">More ></div>
         </div>
      <img class="headerpic" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190202%2F9a9bf659c56848f98a6ac79682f8e860.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622303590&t=a63380b0ce3afd4964f171eb34f4e78e" alt="">
         <div class="main-content">
             <h2>联系我们</h2>
             <div class="main-content-text">
                 三菱电机自动化拥有遍布全国的销售/服务网络，为您提供高效可信赖的支持和服务，为全球化的客户提供强大支持。
             </div>
            <div class="morebtn" @click="navto('/ContactUs')">More ></div>
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
    navto(urls){
      this.$router.push(urls)
    },
    routerbank() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.headerpic {
  margin-top: 40px;
  width: 100%;
  display: block;
}
.headernav {
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
.main {
  padding: 10px 10px;
  .nav {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    background: #ffffff;
    margin-bottom: 2px;
    font-weight: 666;
    div:nth-of-type(2) {
      flex: 1;
      margin-left: 20px;
    }
  }
  .main-content {
    padding: 10px 20px;
    background: #ffffff;
    &-text {
      line-height: 24px;
      margin-bottom: 10px;
      text-indent: 2em;
      font-size: 14px;
    }
    .morebtn {
      margin: 20px 0;
      text-align: center;
      width: 100px;
      padding: 10px;
      background: #ef4d5b;
      color: #ffffff;
    }
  }
  .pic {
    width: 100%;
  }
  .tonav {
    padding: 15px 0;
    line-height: 30px;
    text-align: center;
    font-weight: 555;
    div {
      border-bottom: 1px solid #dfdfdf;
    }
  }
}
.Sociology {
  padding: 40px 20px;
  margin-bottom: 10px;
  text-align: center;
  background:  url("~@/assets/images/ny_banner1.png") center left no-repeat;
  background-size:auto 100% ;
    color: #f5f5f5;
  div:nth-of-type(1) {
    font-size: 32px;
    font-weight: 666;
  }
  div:nth-of-type(2) {
    line-height: 26px;
    font-size: 16px;
    color: #eee;
    font-weight: 600;
    margin: 10px 0;
  }
  .morebtn2 {
    margin: 20px auto;
    text-align: center;
    width: 100px;
    padding: 10px;
    background: #ffffff;
    color: #ef4d5b;
  }
}
</style>