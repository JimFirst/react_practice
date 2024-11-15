import { Menu } from 'antd'
import { useNavigate, useLocation, useMatches } from 'react-router-dom'
import { dynamicRoutes } from '@/routes'
import { cloneDeep } from 'lodash'
import useStore from '@/store'

export default function SiderBar(width) {
  const { permissions } = useStore()
  const menus = getMenus(
    cloneDeep(dynamicRoutes[0].children),
    permissions,
  ).filter(item => item.children.length)

  const navigate = useNavigate()
  function menuClick({ key }) {
    navigate(key)
  }
  const location = useLocation()
  const matches = useMatches()
  const selectedKey = matches[1]?.handle?.active || location.pathname
  function getOpenKeys() {
    if (matches.length) {
      return [matches[0].pathname]
    }
    return []
  }
  return (
    <Menu
      onClick={menuClick}
      style={{ width }}
      defaultOpenKeys={getOpenKeys()}
      selectedKeys={[selectedKey]}
      mode="inline"
      items={menus}
    />
  )
}

function getMenus(menuList, permissions, parentPath) {
  return menuList
    .filter(item => {
      const authorzation = item.handle?.authorzation
      const permit = isPermit(authorzation, permissions)
      return !item.handle?.hidden && permit
    })
    .map(item => {
      if (item.children) {
        item.children = getMenus(item.children, permissions, item.path)
      }
      return {
        key: parentPath ? `${parentPath}/${item.path}` : item.path,
        label: item.handle?.label,
        icon: item.handle?.icon,
        children: item.children,
      }
    })
}

function isPermit(authorzation, permissions) {
  if (!authorzation) return true
  if (Array.isArray(authorzation)) {
    return permissions.some(code => authorzation.includes(code))
  }
  return permissions?.includes(authorzation)
}
