import axios from "../axios";

// UserAPI設定

// 傳入要得到幾筆USER的資料及data
export default function getAllUsers (num,data) {
  return axios({
    url : `?results=${num}`,
    baseUrl : 'https://randomuser.me/api/',
    method: 'get',
    data
  })
}