// axios的攔載器

import axios from 'axios'
import config from './config'

export default function $axios(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL : config.baseUrl,
      headers : config.headers,
      timeout : config.timeout,
      withCredentials : config.withCredentials,
      method : config.method,
    })

    // 請求攔截器
    instance.interceptors.request.use(function(config) {
      // 發送請求前要做的事
      console.log('請求:' , config);
      return config
    },function(error) {
      // 對請求錯誤要做的事
      return Promise.reject(error);
    })
    // 反應攔截器
    instance.interceptors.response.use(function(response) {
      // 對反應的數據要做的事
      console.log('反應:' , response.data)
      resolve(response)
    }, function(error) {
      // 反應錯誤要做的事
      return Promise.reject(error)
    })

    // 請求處理
    instance(option).then(() => {
      // resolve(res)
      return false;
    }).catch(error => {
      reject(error)
    })
  })
}