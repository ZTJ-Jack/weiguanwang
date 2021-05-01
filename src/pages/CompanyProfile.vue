<template>
  <div id="CompanyProfile">
    <div class="headernav">
      <div @click="routerbank">〈</div>
      <div class="title"></div>
      <div></div>
    </div>
    <img  style="display:block;width:100%;" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1837733770,1880405991&fm=26&gp=0.jpg" alt="">
    <div class="main">
      <div class="main-title">
        <!-- <div class="main-title-icon">▶</div> -->
        <div class="main-title-text">以价值创造助力智能制造</div>
      </div>
      <div class="main-content">
        作为全球自动化领域的领导厂商,上海哲宏自动化(中国)有限公司负责上海哲宏工业自动化(FA)事业在中国的业务，致力于为中国客户降低成本、节能增效。自六十年代进入中国以来，上海哲宏的自动化产品已广泛应用于汽车、纺织、包装印刷、食品饮料、电子半导体、机床、新能源等领域;同时也为楼宇、电力、水处理、轨道交通等社会基础设施建设提供有力支持。
      </div>
      <div class="main-content">
        上海哲宏机器人自动化有限公司成立于2009年，坐落在上海市嘉定工业区，是一家开发和生产电控及电子产品的高科技公司。
        经过多年的不断发展，哲宏初步形成了以研发、制造、销售、服务为一体的全方位格局,
        员工人数超过200名，其中研发人员30多名;
        专利产品达100多项，模具设计300余套，用于研发、生产和检测的设备投入高达3000多万元。
        技术团队经验丰富,
        多年来服务于各大知名机床厂商，以技术精湛，服务高效，务实诚信赢得了客户广泛的信赖。“质量赢得市场，诚信铸就哲宏。”
        公司始终秉持用心的服务理念，以勤奋，团结，开拓，创新的优秀团队，为广大客户提供高附加值的产品和全面的技术服务。
        企业文化是一种以人为本的文化，最本质的内容就是强调人的理想、道德、价值观、行为规范在企业管理中的核心作用，强调在企业管理中要理解人、尊重人、关心人。注重人的全面发展，用愿景鼓舞人，用精神凝聚人，用机制激励人，用环境培育人
      </div>
      <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,i) in dataList" :key="i">
            <div class="left">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="right">
              <div class="top"><div class="line1"></div><div class="tit">{{item.time}}</div></div>
              <div class="desc">{{item.desc}}</div>
            </div>
            
          </div>
                <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="main-title" style="margin-top:20px">
        <div class="main-title-icon">▶</div>
        <div class="main-title-text" style=" font-size:18px">企业资料</div>
      </div>
      <ul class="main-ul">
          <li>上海哲宏机器人自动化有限公司</li>
          <li>网址：<a href="http://www.zhehongjd.com">http://www.zhehongjd.com</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {
      dataList:[
        {
          time:"2019年",
          desc:"2019年4月15号，参加北京国际机床展，机床贸易性质更上一次楼。",
        },
        {
          time:"2018年",
          desc:"成立上海精密机械有限公司及开办重庆办事点，3月7号参加中国国家机床展。",
        },
        {
          time:"2017年",
          desc:"安徽哲宏机器人自动化有限公司及哲宏机器人自动化（昆山）有限公司成立）",
        },
        {
          time:"2016年",
          desc:"2016年：更名为上海哲宏机器人自动化有限公司",
        },
        {
          time:"2015年",
          desc:"2015年：成立了特种线缆事业部：主攻数控自动化，机器人等专用特种线缆，年销售总产值突破2亿人民币",
        },
        {
          time:"2014年",
          desc:"2014年：年销售额突破1.8亿人民币",
        },
        {
          time:"2013年",
          desc:"2013年：上海弘昕数控设备有限公司成立",
        },
        {
          time:"2012年",
          desc:"2012年：申请专利20多项，年销售额逾1.4亿人民币",
        },
        {
          time:"2011年",
          desc:"2011年：成立电子事业部，主攻机床加密面板、模块、电子手轮的研发与生产",
        },
        {
          time:"2010年",
          desc:"2010年：成立了华南运营中心，初步形成以上海为中心覆盖华东、华南、华北等众多城市的营销及服务网络",
        },
        {
          time:"2009年",
          desc:"2009年：在上海嘉定正式成立了“上海哲宏机电有限公司”",
        }
      ],
    };
  },
  mounted(){
     setTimeout(function () {
      swiperObj =  new Swiper('#swiper', {
	      	direction : 'vertical',
         slidesPerView: 8,
          spaceBetween: 5,
          loop:true,
          autoplay:1000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          
      });
    }, 100)
  },
  methods:{
    
    routerbank() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
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
.swiper-container{
  height: 700px;
  .swiper-slide{
    height: 120px;
    width: 100%;
    display: flex;
    .left{
      width: 20px;
      height: 100%;
      box-sizing: border-box;
      padding-top: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
        margin-right: 10px;
      .circle{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 5px solid #0049ac;
      }
      .line{
        width: 2px ;
        flex: 1;
        background: #eee;
      }
    }
    .right{
      flex: 1;
      .top{
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        .line1{
          width: 40px;
          height: 2px;
          background: #eee;
          margin-right: 5px;
        }
        .tit{
          width: 80px;
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          text-align: center;
          background: #0049ac;
          color: #ffffff;
          font-size: 15px;
        }
      }
    }
  }
}

*{
    margin: 0;
    padding: 0;
}
#CompanyProfile {
  background: #ffffff;
  .main {
  margin: 20px 0;
  padding: 0 20px;
  background: #ffffff;
    &-title {
      font-size: 20px;
      font-weight: 500;
      display: flex;
      &-icon {
        color: crimson;
      }
      &-text {
        margin-left: 15px;
      }
    }
    &-content {
      margin: 15px 0;
      font-size: 14px;
      text-indent: 2em;
      line-height: 24px;
      letter-spacing: 2px;
    }
    &-ul{
        li{
            list-style:none;
            padding: 8px 0;
            line-height: 24px;
            // letter-spacing: 2px;
            // font-size: 14px;
            border-bottom: 1px #999999 solid;
            a{text-decoration: none; color: #000;}
        }
    }
  }
}
</style>