import axios from "axios"
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import type { LSRequestConfig } from "./type"

class LSRequest {
  instance: AxiosInstance
  // request实例 => axios实例
  constructor(config: LSRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器(全局拦截器)
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 针对特定的实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 网络请求方法
  request<T = any>(config: LSRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config as any as InternalAxiosRequestConfig)
    }

    return new Promise<T>((resolve, reject) => {
      return this.instance
        .request<any, T>(config as any as InternalAxiosRequestConfig)
        .then((res) => {
          // 单次响应成功拦截
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res as any as T)
        })
        .catch((err) => {
          if (config.interceptors?.responseFailureFn) {
            err = config.interceptors.responseFailureFn(err)
          }
          reject(err)
        })
    })
  }

  get<T = any>(config: LSRequestConfig<T>) {
    return this.request({ ...config, method: "GET" })
  }
  post<T = any>(config: LSRequestConfig<T>) {
    return this.request({ ...config, method: "POST" })
  }
  delete<T = any>(config: LSRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" })
  }
  put<T = any>(config: LSRequestConfig<T>) {
    return this.request({ ...config, method: "PUT" })
  }
  patch<T = any>(config: LSRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" })
  }
}

export default LSRequest
