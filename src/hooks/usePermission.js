import useStore from '@/store'

// authorzation 字符串或者数组，若为空，则不校验权限
export function usePermission(authorzation) {
  if (!authorzation) return true
  const { permissions } = useStore()
  if (Array.isArray(authorzation)) {
    return permissions.some(code => authorzation.includes(code))
  }
  return permissions?.includes(authorzation)
}
