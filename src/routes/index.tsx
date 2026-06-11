import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import Home from '../pages/Home'
import AuthRoute from '../components/AuthRoute'

const Login = lazy(() => import('@/pages/Login'))
import BaseLayout from '@/layouts/BaseLayout'
import customer from './customer'

const Page404 = lazy(() => import('@/pages/404'))

interface RouteHandle {
  hidden?: boolean
  label?: string
  icon?: React.ReactNode
  authorization?: string | string[]
  active?: string
}

type AppRouteObject = {
  path?: string
  index?: boolean
  element?: React.ReactNode
  handle?: RouteHandle
  children?: AppRouteObject[]
  errorElement?: React.ReactNode
}

const baseRoutes: AppRouteObject[] = [
  {
    path: '404',
    element: <Page404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

const dynamicRoutes: AppRouteObject[] = [
  {
    path: '',
    element: <AuthRoute />,
    errorElement: <Navigate to="/404" replace />,
    children: [
      {
        path: '/',
        element: <BaseLayout />,
        handle: {
          hidden: true,
        },
        children: [
          {
            path: 'home',
            element: <Home />,
          },
        ],
      },
      {
        path: '/customer',
        element: <BaseLayout />,
        handle: {
          label: '客户管理',
        },
        children: [...customer] as AppRouteObject[],
      },
    ],
  },
]

function createRouter() {
  return createBrowserRouter([...dynamicRoutes, ...baseRoutes] as RouteObject[])
}

export default createRouter
export { baseRoutes, dynamicRoutes }
export type { AppRouteObject as RouteObject, RouteHandle }
