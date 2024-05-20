import { httpRequest } from './request'

export default {
  login(params) {
    return httpRequest('/baidu', params)
  },
}
