<template>
  <div class="content">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180131%2Fe74f92ace17643338e3ff0b105480468.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622306489&t=484c03f0d5d1039572423920073ed55d" alt="">
      <div class="inner">
        <div class="tit">企业理念</div>
        <div class="p">我们三菱电机集团<br/>要以不懈的技术革新和无穷的创造力,<br/>为实现充满活力、富裕繁荣的社会作出贡献。</div>
        <div class="titsm">我们的价值观</div>
        <h3>信赖</h3>
        <p>珍视与社会、客户、股东、合作伙伴，以及共事员工的信赖关系。</p>
        <h3>品质</h3>
        <p>提供令社会和客户满意的高品质产品及服务。</p>
        <h3>技术</h3>
        <p>锲而不舍地追求技术实力以及现场能力的提升，为社会提供全新价值。。</p>
        <h3>伦理与遵法</h3>
        <p>遵守社会规范及法令，在行动中秉持高尚的伦理观。</p>
        <h3>人本</h3>
        <p>与自然和谐相处，肩负起保护并改善地球环境的责任。</p>
        <h3>社会</h3>
        <p>作为企业公民，为创造更美好的社会贡献力量。</p>
        <h3>环境</h3>
        <p>与自然和谐相处，肩负起保护并改善地球环境的责任。</p>
        <div class="titsm">企业宣言</div>
        <h5>Changes for the Better</h5>
        <p>“Changes for the Better"”代表着三菱电机集团“始终追求更高品质，不断推动变革”的决心。我们承诺，我们中的每一一个人都会怀着不断向变革发起挑战的强烈意志和极大热情，共同开拓“更美好的未来”。</p>
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
  
  }
};
</script>

<style lang="scss" scoped>
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
            margin: -40px auto 0;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-sizing: border-box;
            padding: 10px 20px;
            margin-top: -60px;
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
    .p,p{
        font-size: 14px;
        line-height: 24px;
        margin: 20px 0;
    }
    .titsm{
        font-size: 22px;
        line-height: 30px;
        margin: 20px 0;
    }
    h3{
        font-size: 18px;
    }
    h5{
        font-size: 22px;
        font-weight: inherit;
        font-weight: 600;
    }
</style>