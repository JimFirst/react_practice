import { http } from '@/utils/http'

export const httpRequest = async (url, options = {}) => {
  try {
    const res = await http({
      url,
      ...options,
    })
    if (!res?.success) {
      throw new Error('httpRequest get nothing from server!')
    } else {
      return res
    }
  } catch (error) {
    console.error('httpRequest error: ', error)
    return {
      success: false,
      message: '服务无响应数据',
      data: null,
    }
  }
}
