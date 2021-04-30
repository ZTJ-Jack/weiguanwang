import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    //资料中心
    {
      path: '/About',
      name: 'About',
      component: () => import('@/pages/About.vue')
    },
    //资料中心
    {
      path: '/datacenter',
      name: 'datacenter',
      component: () => import('@/pages/DataCenter.vue')
    },
    //资料详情
    {
      path: '/datadetails',
      name: 'datadetails',
      component: () => import('@/pages/DataDetails.vue')
    },
    //市场活动
    {
      path: '/MarketActivity',
      name: 'MarketActivity',
      component: () => import('@/pages/MarketActivity.vue')
    },
    //招聘中心
    {
      path: '/recruitment',
      name: 'recruitment',
      component: () => import('@/pages/recruitment.vue')
    },
    //合作伙伴
    {
      path: '/partners',
      name: 'partners',
      component: () => import('@/pages/partners.vue')
    },
    //分类
    {
      path: '/ClassificationList',
      name: 'ClassificationList',
      component: () => import('@/pages/ClassificationList.vue')
    },
     //轮播页面
     {
      path: '/swipers',
      name: 'swipers',
      component: () => import('@/pages/swipers.vue')
    },
    //历史消息
    {
      path: '/card',
      name: 'card',
      component: () => import('@/pages/card.vue')
    },
    //联系我们
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import('@/pages/ContactUs.vue')
    },
    //企业理念
    {
      path: '/qiyelilian',
      name: 'qiyelilian',
      component: () => import('@/pages/qiyelilian.vue')
    },
    //加入我们
    {
      path: '/joinUs',
      name: 'joinUs',
      component: () => import('@/pages/joinUs.vue')
    },
    //资料下载
    {
      path: '/ziliaOnav',
      name: 'ziliaOnav',
      component: () => import('@/pages/ziliaOnav.vue')
    },
    {
      path: '/CompanyProfile',
      name: 'CompanyProfile',
      component: () => import('@/pages/CompanyProfile.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('@/pages/details.vue')
    },
    {
      path: '/loopbo',
      name: 'loopbo',
      component: () => import('@/pages/loopbo.vue')
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: () => import('@/pages/productDetails.vue')
    },
  ]
})
