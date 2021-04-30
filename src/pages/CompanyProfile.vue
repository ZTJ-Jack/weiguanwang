<template>
  <div id="CompanyProfile">
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

      <div class="main-title" style="margin-top:50px">
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
export default {};
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
#CompanyProfile {
  margin: 20px 0;
  padding: 0 20px;
  .main {
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