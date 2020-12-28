import axios from 'axios'
import base from '../../base.config'
import { Message, Loading } from 'element-ui'
let loading = null

// 设置接口超时时间
axios.defaults.timeout = 60000
// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 设置接口地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = base.pro
}
let count = 0

/**
 *请求前拦截
 *用于处理请求前的操作
*/
axios.interceptors.request.use(
  config => {
    // console.log('+ ', count)
    count++
    loading = Loading.service({
      text: '正在加载中......',
      fullscreen: true,
      lock: true
    })
    // 判断是否存在token,存在的话加入请求头
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.error(error)
  }
)

/**
 *请求相应拦截
 *用于处理请求后的操作
*/
axios.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      const res = response.data
      count--
      // console.log('r- ', count)
      if (count === 0) {
        if (loading) {
          loading.close()
        }
      }
      if (res.resultCode === 200) {
        resolve(res)
      } else {
        // switch (res.resultCode) {
        // // 400: 未查询到数据
        // case 400:
        //   Message({
        //     message: '当前无可用数据',
        //     type: 'warning',
        //     duration: 1000
        //   })
        //   break
        // // 401: 未登录状态，跳转登录页
        // case 401:
        //   Message.warning('未登录')
        //   break
        // // 403 token过期
        // // 清除token并跳转登录页
        // case 403:
        //   Message.warning('登录过期，请重新进入')
        //   sessionStorage.removeItem('token')
        //   break
        // // 404请求不存在
        // case 404:
        //   Message.warning('请求的资源不存在')
        //   break
        // default:
        //   Message({
        //     message: res.resultMsg,
        //     type: 'warning',
        //     duration: 1000
        //   })
        // break
        // }
        resolve(res)
      }
    })
  },
  error => {
    return new Promise((resolve, reject) => {
      count--
      // console.log('e- ', count)
      if (count === 0) {
        if (loading) {
          loading.close()
        }
      }
      // 断网处理或者请求超时
      if (!error.response) {
        // 请求超时
        if (error.message.includes('timeout')) {
          Message({
            message: '请求超时，请检查互联网连接',
            type: 'error',
            duration: 1000
          })
          // Message('error', '请求超时，请检查互联网连接')
        } else {
          // 断网，可以展示断网组件
          Message({
            message: '请检查网络是否已连接',
            type: 'error',
            duration: 1000
          })
          // Message('error', '请检查网络是否已连接')
        }
        Message({
          message: '网络问题，请稍后重试',
          type: 'error',
          duration: 1000
        })
        // Message('error', '网络问题，请稍后重试')
        reject(error.data)
      }
      Message({
        message: error.data,
        type: 'error',
        duration: 1000
      })
      // Message('error', error.data)
      reject(error.data)
    })
  })
/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function get (url, param) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: {
          t: Date.parse(new Date()) / 1000,
          ...param
        }
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/*
 *put方法，对应put请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function put (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, { params: params })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/*
 *delete方法，对应delete请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function dele (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
