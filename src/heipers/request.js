import  axios from 'axios'
import {Message} from "element-ui";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'//发送请求的类型，参考范例
axios.defaults.baseURL = '//locahost:8080'//本地可改线上


//按照axios文档的约定来构造参数
export  default function request(url,type = 'GET',data = {}) {
  return new Promise((resolve, reject)=>{
    let option = {
      url,
      method: type,
    }
    //判断GET
    if(type.toLowerCase() === 'get'){
      option.params = data
    }else {
      option.data = data
    }
    if (localStorage.token){
      axios.defaults.headers.common['Authorization'] = localStorage.token
    }

    //token的作用:Token是首次登陆时由服务器下发，作为客户端进行请求的
    // 一个令牌，当交互时用于身份验证的一种验证机制，当第一次登录后，
    // 服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上
    // 这个Token前来请求数据即可，无需再次带上用户名和密码。

    axios(option).then(res => {
      console.log(res.data)
      if (res.data.status === 'ok'){//与后端的约定
        if(res.data.token){
          localStorage.token = res.data.token
        }
        resolve(res.data)
      }else {
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({msg:'网络异常'})
    })
  })
}

//路径、POST请求、请求的参数
//返回数据
// request('/auth/login','POST',{username:'hunger',password:'123456'})
//  .then(data=>{
//  console.log(data)
//  })
