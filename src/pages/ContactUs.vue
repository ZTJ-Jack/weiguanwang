<template>
  <div class="app">
    <div></div>
    <img class="headerpic" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180804%2Fd100c7bda6a6490f91e0b47e570fbd5b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622217348&t=167196b01152721b460eb3b438a548cf" alt="">
    <div class="main">
      <!-- <div class="nav" style="display:flex;">
        <div>首页</div>
        <div>联系我们</div>
        <div>收藏</div>
      </div> -->
      <div class="main-content">
        <h2 style='border-left:3px solid #ef4d5b;'>&nbsp;&nbsp;联系我们</h2>
        <div
          class="main-content-text"
        >
       上海哲宏机器人自动化有限公司成立于2016年03月11日，注册地位于上海市嘉定区恒永路328弄38号2层A区，法定代表人为韩正强。经营范围包括从事机器人自动化技术、自动化控制设备技术领域内的技术开发、技术转让、技术咨询、技术服务，数控系统、配电柜、操作面板、手持单元、继电器模块、线束的生产、销售，电线电缆、电子元器件、机械设备及配件的销售，从事货物及技术的进出口业务。</div>
      </div>
    </div>
    <div class="totop">
      总部
    </div>
    <div class="main" style="margin-bottom:20px;">
      <div class="main-content">
        <h2 style='border-left:3px solid #ef4d5b;'>&nbsp;&nbsp;公司总部</h2>
        <div class="main-content-text">地址:上海市嘉定区恒永路328弄38号2层A区</div>
        <div class="main-content-text">邮编:200336</div>
        <div class="main-content-text">电话:86-21-2322-3030</div>
        <div class="main-content-text">传真:86-21-2322-3000</div>
      </div>
    </div>
     <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
        <!--缩放-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <!--定位-->
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <!--点-->
        <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
            <!--提示信息-->
            <bm-info-window :show="map.show"><span style="line-height:30px;">上海市嘉定区恒永路328弄38号2层A区<br>联系电话：13298388830</span></bm-info-window>
            
        </bm-marker>
      </baidu-map>
      <div style="width:100%;padding-bottom:30px;"></div>
  </div>
</template>

<script>
    export default {
        name: "demo",
        data: () => ({
            map:{
                center: {lng: 121.210786, lat: 31.349574},
                zoom: 15,
                show: true,
                dragging: true
            },
        }),
        methods: {
            handler ({BMap, map}) {
                let me = this;
                console.log(BMap, map)
                // 鼠标缩放
                map.enableScrollWheelZoom(true);
                // 点击事件获取经纬度
                map.addEventListener('click', function (e) {
                    console.log(e.point.lng, e.point.lat)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>    
.map {
    width: 92%;
    height: 400px;
    margin: 0 auto;
}
.app{
  width: 100%;
  height: 100vh;
  background: #ffffff;
}
.headerpic {
  width: 100%;
  display: block;
}
.main {
  width: 310px;
  margin: 0 auto;
  padding: 10px 20px;
  box-shadow: 0 0 5px #eee;
  border-radius: 8px;
  .nav {
    padding: 12px 20px;
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
    background: #ffffff;
    &-text {
    line-height: 22px;
    /* margin-bottom: 10px; */
    /* text-indent: 2em; */
    font-size: 14px;
    }
    }
}
.totop{
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 600;
}
</style>