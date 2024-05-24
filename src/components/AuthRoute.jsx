import { Navigate } from 'react-router-dom'
import { usePermission } from '@/hooks'
const AuthRoute = ({ element, code }) => {
  console.log('auth')
  if (!code) return element
  const isPermit = usePermission(code)
  if (!isPermit) {
    return <Navigate to="/login" />
  }
  // if (userRole !== 'admin') {
  //   return <Navigate to="/unauthorized" />
  // }
  return element
}

export default AuthRoute
