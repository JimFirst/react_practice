import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'

import Home from '../pages/Home'
import AuthRoute from './AuthRoute'
import PageLayout from '../layouts/PageLayout'

import sample from './sample'
const Page404 = lazy(() => import('@/pages/404'))
const baseRoutes = [
  {
    path: '404',
    element: <Page404 />,
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
        element: <PageLayout header={false} />,
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
        path: '/sample',
        element: <PageLayout />,
        handle: {
          label: '客户管理',
        },
        children: [...sample],
      },
    ],
  },
]

function createRouter() {
  return createBrowserRouter([...dynamicRoutes, ...baseRoutes])
}
export default createRouter
export { baseRoutes, dynamicRoutes }
