import { useStore } from '@/store'

// authorzation 字符串或者数组
export function usePermission(authorzation) {
  const { permissions } = useStore()
  if (Array.isArray(authorzation)) {
    return permissions.some(code => authorzation.includes(code))
  }
  return permissions?.includes(authorzation)
}
