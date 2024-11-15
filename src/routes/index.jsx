import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'

import Home from '../pages/Home'
import AuthRoute from '../components/AuthRoute'
const Login = lazy(() => import('@/pages/Login'))
import BaseLayout from '../layouts/BaseLayout'

import customer from './customer'
const Page404 = lazy(() => import('@/pages/404'))
const baseRoutes = [
  {
    path: '404',
    element: <Page404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
const dynamicRoutes = [
  {
    path: '',
    element: <AuthRoute />,
    errorElement: <Navigate to="/404" replace={true} />,
    children: [
      {
        path: '/',
        element: <BaseLayout />,
        handle: {
          hidden: true,
        },
        children: [
          {
            index: true,
            element: <Home />,
          },
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
        children: [...customer],
      },
    ],
  },
]

function createRouter() {
  return createBrowserRouter([...dynamicRoutes, ...baseRoutes])
}
export default createRouter
export { baseRoutes, dynamicRoutes }
