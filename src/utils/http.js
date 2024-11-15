import axios from 'axios'

function getHttp(model = 'manager') {
  const http = axios.create({
    baseURL: `/${model}/api/pc`,
    timeout: 60000, //请求超时时间
  })
  // 添加请求拦截器
  // http.interceptors.request.use(
  //   config => {
  //     const { token, ...rest } = config
  //     const Authorization = token
  //       ? storage.get('userToken', { initialValue: '' })
  //       : ''

  //     return {
  //       ...rest,
  //       headers: {
  //         ...rest.headers,
  //         Authorization,
  //       },
  //     }
  //   },
  //   error => {
  //     return Promise.reject(error)
  //   },
  // )

  // 添加响应拦截器
  http.interceptors.response.use(
    response => {
      const { data: serverResponse } = response
      if (!serverResponse) {
        return {
          code: 1,
          message: '服务端返回空数据',
        }
      }
      if (
        ['string', 'number'].includes(typeof serverResponse) ||
        serverResponse instanceof Array
      ) {
        // 服务端返回字符串/数字/数组，拼接前端响应数据结构
        return {
          code: 1,
          data: serverResponse,
        }
      }
      return serverResponse
    },
    error => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      const { status } = error.response
      if (status === 401) {
        return {
          code: 401,
          message: '登录已过期',
        }
      }
      return Promise.reject(error)
    },
  )
  return http
}

export { getHttp }
