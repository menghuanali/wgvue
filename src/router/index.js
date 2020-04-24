import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'
Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index')},
  {path: '/register', component: () => import('@/views/register/index')},
  {path: '/404', component: () => import('@/views/404')},
  {path: '/test', component: () => import('@/views/test/index')},//未登陆
  {path: '/', component: () => import('@/views/logined/home/index')},//已登陆
  {path: '/myself', component: () => import('@/views/logined/user/myself'),meta: {needLogin: true}}, //需要加校检判断的路由
  {path: '/follows', component: () => import('@/views/logined/dynamic/friendsdynamic'),meta: {needLogin: true}}, //需要加校检判断的路由
  {path: '/user', component: () => import('@/views/logined/her/her')},
  {path: '/work', component: () => import('@/views/logined/home/picturedetails')},
  {path: '/bowen', component: () => import('@/views/logined/home/bowen')},
  {path: '/worklist', component: () => import('@/views/logined/home/works_list')},
  {path: '/bowenlist', component: () => import('@/views/logined/home/article_list')},
  {path: '/photographer', component: () => import('@/views/logined/home/photographer')},
  {path: '/work/create', component: () => import('@/views/logined/home/create'),meta: {needLogin: true}},
  {path: '/write', component: () => import('@/views/logined/home/write'),meta: {needLogin: true}},
  {path: '/preview', component: () => import('@/views/logined/home/preview'),meta: {needLogin: true}},
  {path: '/message/:type/', name:"message",component: () => import('@/views/logined/home/message_list'),meta: {needLogin: true}},
  
]



const router =  new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap,
})
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    // console.log("需要登陆权限");
    //页面是否登录
    if (getToken()) {
      //本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
      next({
         path:"/login"
      });
    }
  } else {
    // console.log("不需要登陆权限");
    //表示不需要登录
    next(); //继续往后走
  }
})
export default router;
