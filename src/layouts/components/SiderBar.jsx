import { Menu } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'

const menus = [
  {
    key: '/customer',
    label: '客户管理',
    icon: <MailOutlined />,
    children: [
      {
        key: '/customer/add',
        label: '新增客户',
      },
      {
        key: '/customer/list',
        label: '客户查询',
      },
    ],
  },
  {
    key: 'sub2',
    label: '项目管理',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: '新增项目' },
      { key: '6', label: '项目查询' },
      { key: '7', label: '项目种类设置' },
    ],
  },
  {
    key: 'sub4',
    label: '人力资源',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: '组织架构' },
      { key: '10', label: '人员管理' },
    ],
  },
  {
    key: 'grp',
    label: '系统管理',
    icon: <SettingOutlined />,
    children: [
      { key: '13', label: '菜单管理' },
      { key: '14', label: '内容管理' },
      { key: '15', label: '角色管理' },
      { key: '16', label: '角色分配' },
      { key: '17', label: '系统日志' },
    ],
  },
]
export default function SiderBar() {
  const navigate = useNavigate()
  const loaction = useLocation()
  // const selectedKey = loaction.pathname

  console.log(loaction)
  function onClick({ key }) {
    navigate(key)
  }
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultOpenKeys={['/customer']}
      // defaultSelectedKeys={[selectedKey]}
      mode="inline"
      items={menus}
    />
  )
}
