import axios, { AxiosRequestConfig, CustomParamsSerializer } from 'axios'
import { stringify } from 'qs'

const defaultConfig: AxiosRequestConfig = {
  timeout: 10000, // 请求超时时间，单位ms
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  paramsSerializer: {
    serialize: stringify as unknown as CustomParamsSerializer,
  },
}

const server = axios.create(defaultConfig)

server.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
  }
)

server.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    console.log(err)
  }
)

export default server
