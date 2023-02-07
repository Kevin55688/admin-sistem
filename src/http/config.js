// axios 相關設定

import { baseUrl } from "@/utils/global"
export default {
  method: 'post',
  // url前綴
  baseUrl: baseUrl,
  // 請求訊息
  headers: {
    'Content-Type' : 'application/json;charset=UTF-8'
  },
  // 參數
  data:{},
  // 超時時間
  timeout : 10000,
  // 是否要憑証
  withCredentials: false,
  // 返回數據類型
  responseType: 'json',
}