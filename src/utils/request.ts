import { stringify } from 'qs'
import { contentType, timeout } from '/@/config'

/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL: `//${import.meta.env.VITE_BASE_URL}`,
  timeout,
  headers: {
    'Content-Type': contentType,
  },
})

/**
 * axios请求拦截器配置
 * @param config
 * @returns {any}
 */
const requestConf = (config: any) => {
  if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8')
    config.data = stringify(config.data)

  config.paramsSerializer = {
    serialize: (params: any) => {
      return stringify(params, { arrayFormat: 'repeat' })
    },
  }
  return config
}

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(requestConf, (error) => {
  return Promise.reject(error)
})

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  (response) => response,
  (error: any) => {
    const { response } = error
    if (response === undefined) {
      return {
        data: {
          code: 500,
          detail: '连接服务器失败, 请联系管理员',
        },
      }
    } else return response
  }
)

export default instance
