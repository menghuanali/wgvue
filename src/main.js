// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
//引入 Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import store from './store';
import '@/icons';
import '@/style/main.css'
import Axios from 'axios';
import './mock/index' ;

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
//是否可带验证信息
Vue.config.productionTip = true
Axios.defaults.withCredentials=false
/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
