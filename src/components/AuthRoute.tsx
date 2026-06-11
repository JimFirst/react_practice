import { Navigate, useMatches, Outlet } from 'react-router-dom'
import { usePermission } from '@/hooks'

interface AuthRouteProps {
  children?: React.ReactNode
}

interface RouteHandle {
  authorization?: string | string[]
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const matches = useMatches()
  if (!matches.length) {
    return children ? <>{children}</> : <Outlet />
  }
  const lastMatch = matches[matches.length - 1]
  const handle = lastMatch.handle as RouteHandle | undefined
  const authorization = handle?.authorization
  const isPermit = usePermission(authorization)
  if (!isPermit) {
    return <Navigate to="/404" />
  }
  return children ? <>{children}</> : <Outlet />
}

export default AuthRoute
