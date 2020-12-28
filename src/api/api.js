// import { get, post } from './axios'
// import login from './apiModel/login'
const api = {
  // ...login, 引用时写作  this.$api.{接口方法名}
  // 或者
  // login, 引用时写作  this.$api.login.{接口方法名}

  // 钉钉code免登
  // postDingLogin: data => get('/dinglogin/login/ding', data), 示例
  // 获取用户logo信息
  // getUserInfo: data => post('/homebook/login/getUserInfo', data) 示例
}
export default api
