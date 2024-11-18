import { Navigate, useMatches } from 'react-router-dom'
import { usePermission } from '@/hooks'
import { Outlet } from 'react-router-dom'
const AuthRoute = ({ children }) => {
  const matchs = useMatches
  if (!matchs.length) {
    return children ? children : <Outlet />
  }
  const authorzation = matchs[matchs.length - 1].handle?.authorzation
  const isPermit = usePermission(authorzation)
  if (!isPermit) {
    return <Navigate to="/404" />
  }
  return children ? children : <Outlet />
}

export default AuthRoute
