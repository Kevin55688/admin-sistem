import axios from "./axios";


export default function testFc (data) {
  return axios({
    url : '?results=50',
    baseUrl : 'https://randomuser.me/api/',
    method: 'get',
    data
  })
}