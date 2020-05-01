import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user'
import her from './modules/her'
import homedata from './modules/homedata'
import getters from './getters'
import preview from './modules/preview'
//使用vuex
Vue.use(Vuex)
//创建vuex实例 学习 ： https://baijiahao.baidu.com/s?id=1618794879569468435&wfr=spider&for=pc
const store = new Vuex.Store({
    modules:{
        user,
        her,
        homedata,
        preview,
   },
   getters,
   plugins: [createPersistedState({})]
})
//导出store
//时间处理
Date.prototype.Format = function(fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "H+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      S: this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
    return fmt;
  };
export default store