import { BASE_URL, TIME_OUT } from "./config"
import LSRequest from "./request"

const lsRequest = new LSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 单个实例的全局请求拦截
  interceptors: {}
})

// const lsRequest2 = new LSRequest({
//   baseURL: BASE_URL2,
//   timeout: TIME_OUT2,
//   interceptors: {
//     requestSuccessFn: (config) => {
//       console.log("自定义实例请求成功拦截2")
//       return config
//     },
//     requestFailureFn: (err) => {
//       console.log("自定义实例请求失败拦截2")
//       return err
//     },
//     responseSuccessFn: (res) => {
//       console.log("自定义实例响应成功拦截2")
//       return res
//     },
//     responseFailureFn: (err) => {
//       console.log("自定义实例响应失败拦截2")
//       return err
//     }
//   }
// })
// lsRequest
export { lsRequest }
