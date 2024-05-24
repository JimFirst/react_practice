import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import { cloneDeep } from 'lodash'

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
    path: '/',
    element: <BaseLayout />,
    errorElement: <Navigate to="/404" replace={true} />,
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
    children: [...customer],
  },
]

function createRouter() {
  const routers = traversalRoutes(cloneDeep(dynamicRoutes))
  return createBrowserRouter([...routers, ...baseRoutes])
}
function traversalRoutes(tree = []) {
  tree.forEach(item => {
    if (item.children) {
      item.children = item.children.map(child => {
        child.element = (
          <AuthRoute
            element={child.element}
            code={child.meta?.authorzation}
          ></AuthRoute>
        )
        return child
      })
    }
  })
  return tree
}
export default createRouter
export { baseRoutes, dynamicRoutes }
