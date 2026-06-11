import { Menu } from 'antd'
import { useNavigate, useLocation, useMatches } from 'react-router-dom'
import { dynamicRoutes } from '@/routes'
import { cloneDeep } from 'lodash'
import useStore from '@/store'
import type { MenuProps } from 'antd'
import type { RouteObject } from '@/routes'

interface SiderBarProps {
  width?: number
}

interface RouteHandle {
  label?: string
  icon?: React.ReactNode
  authorization?: string | string[]
  active?: string
  hidden?: boolean
}

interface MenuItemType {
  key: string
  label?: string
  icon?: React.ReactNode
  children?: MenuItemType[]
}

export default function SiderBar({ width = 256 }: SiderBarProps) {
  const { permissions } = useStore()
  const menus = getMenus(
    cloneDeep<RouteObject[]>(dynamicRoutes[0].children || []),
    permissions,
  ).filter(item => item.children && item.children.length > 0)

  const navigate = useNavigate()

  function menuClick({ key }: { key: string }) {
    navigate(key)
  }

  const location = useLocation()
  const matches = useMatches()
  const matchHandle = matches[1]?.handle as RouteHandle | undefined
  const selectedKey = matchHandle?.active || location.pathname

  function getOpenKeys(): string[] {
    if (matches.length) {
      return [matches[0].pathname]
    }
    return []
  }

  const menuItems: MenuItemType[] = menus.map(menu => {
    const menuHandle = menu.handle as RouteHandle | undefined
    const children = menu.children?.map(child => {
      const childHandle = child.handle as RouteHandle | undefined
      return {
        key: child.path || '',
        label: childHandle?.label,
        icon: childHandle?.icon,
      } as MenuItemType
    })
    return {
      key: menu.path || '',
      label: menuHandle?.label,
      icon: menuHandle?.icon,
      children,
    } as MenuItemType
  })

  return (
    <Menu
      onClick={menuClick}
      style={{ width }}
      defaultOpenKeys={getOpenKeys()}
      selectedKeys={[selectedKey]}
      mode="inline"
      items={menuItems}
    />
  )
}

function getMenus(
  menuList: RouteObject[],
  permissions: string[],
  parentPath?: string,
): RouteObject[] {
  return menuList
    .filter(item => {
      const itemHandle = item.handle as RouteHandle | undefined
      const authorization = itemHandle?.authorization
      const permit = isPermit(authorization, permissions)
      return !itemHandle?.hidden && permit
    })
    .map(item => {
      if (item.children) {
        item.children = getMenus(item.children, permissions, item.path)
      }
      return {
        ...item,
        path: parentPath ? `${parentPath}/${item.path}` : item.path,
      }
    })
}

function isPermit(
  authorization: string | string[] | undefined,
  permissions: string[],
): boolean {
  if (!authorization) return true
  if (Array.isArray(authorization)) {
    return permissions.some(code => authorization.includes(code))
  }
  return permissions?.includes(authorization)
}
