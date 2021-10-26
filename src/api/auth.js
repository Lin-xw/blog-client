import request from "@/heipers/request";

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}
//底层数据做一个封装

//导出对象
export default {
  register({username, password}){
    return request(URL.REGISTER, 'POST',{ username, password})
  },
  login({username, password}){
    return request(URL.LOGIN, 'POST',{ username, password})
  },
  logout(){
    return request(URL.LOGOUT)
  },
  getInfo(){
    return request(URL.GET_INFO)
  },
}
