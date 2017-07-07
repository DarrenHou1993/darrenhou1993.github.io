import axios from 'axios'
import url from './url'
// 设置请求响应时间
axios.defaults.timeout = 5000
// 配置程序基础路径
axios.defaults.baseURL = url.base

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  return config;
}, (error) => {
  return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  return res;
}, (error) => {
  return Promise.reject(error);
});
//返回一个Promise(发送post请求)
export default function fetch(url, params, isGet) {
  let method = 'post'
  // 如果是get请求
  if (isGet) {
    params = {
      params: params
    }
    method = 'get'
  }
  return new Promise((resolve, reject) => {
    axios[method](url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
