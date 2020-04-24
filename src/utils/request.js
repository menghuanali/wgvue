import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url  process 学习 http://nodejs.cn/api/process.html
    timeout: 15000 // 请求超时时间
  })
  
  // request请求拦截器
  service.interceptors.request.use(config => {
    // console.log(getToken());
    // console.log(config.headers['Content-Type']);
    
    if (getToken()) {
      config.headers['Aitutoken'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  }, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  })
  
  // respone响应拦截器
  service.interceptors.response.use(
    response => {
    /**
    * code为非200是抛错 可结合自己业务进行修改
    */
      const res = response.data
      if(res.code == 200){
        return response.data
      }else if(res.code == 401){
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
        return Promise.reject('error')
      }else if(res.code==404){
        this.$router.push({
          path: "/404"
        });
      }else{
        alert(res.message)
        return Promise.reject('error')
      }
    },
    error => {
      console.log("开始调试吧");
      console.log('err' + error)// for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(error)
    }
  )
  
  export default service