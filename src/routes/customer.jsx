import { lazy } from 'react'
const Edit = lazy(() => import('@/pages/customer/Edit'))
const List = lazy(() => import('@/pages/customer/List'))
export default [
  {
    path: 'add',
    element: <Edit />,
    meta: {
      authorzation: ['customer'],
    },
  },
  {
    path: 'edit/:id',
    element: <Edit />,
  },
  {
    path: 'list',
    element: <List />,
  },
]
