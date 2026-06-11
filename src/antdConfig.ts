import type { ThemeConfig } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const antdConfig: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 4,
  },
}

export default antdConfig
