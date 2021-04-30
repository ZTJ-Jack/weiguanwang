import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css'
import { WOW } from 'wowjs'
Vue.config.productionTip = false
import vant from 'vant'
import 'vant/lib/index.css';
Vue.use(vant)
import 'lib-flexible/flexible.js'


import BaiduMap from 'vue-baidu-map'
 
Vue.use(BaiduMap, {
    ak: 'LiekWuoyqc6r7c4QQr88j68w6bjzR2bG'
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    mounted() {
        // var wow = new WOW({
        //   boxClass: 'wow',
        //   animateClass: 'animated',
        //   offset: 0,
        //   mobile: true
        // })
        // wow.init()
        new WOW().init()
    }
})