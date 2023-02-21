import type {
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  CreateAxiosDefaults
} from "axios"

export interface LSInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

// 扩展AxiosInstance
export interface LSRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {
  interceptors?: LSInterceptors<T>
}
