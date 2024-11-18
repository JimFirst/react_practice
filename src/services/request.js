import { getHttp } from '@/utils/http'
import { message as Message } from 'antd-mobile'

export const httpRequest = async (url, options = {}, model) => {
  try {
    const http = getHttp(model)
    const res = await http({
      url,
      ...options,
    })
    if (res?.code !== 0) {
      if ([401, 403].includes(res.code)) {
        location.href = '/login'
        Message.error('登录已超时，请重新登录')
      } else {
        Message.error(res.message || '服务无响应')
      }
    }
    return res
  } catch (error) {
    console.error(error)
    const { code, message } = error
    Message.error(message || '服务无响应')
    return {
      code: code || 1,
      message: message,
      data: null,
    }
  }
}
