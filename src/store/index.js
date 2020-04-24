import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user'
import her from './modules/her'
import pictures from './modules/pictures'
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
        pictures,
        homedata,
        preview,
   },
   getters,
   plugins: [createPersistedState({})]
})
//导出store
export default store