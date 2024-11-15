import { lazy } from 'react'
import Loading from './Loading'
const Edit = lazy(() => import('@/pages/customer/Edit'))
const List = lazy(() => import('@/pages/customer/List'))
export default [
  {
    path: 'add',
    element: (
      <Loading>
        <Edit />
      </Loading>
    ),
    handle: {
      label: '新增客户',
    },
  },
  {
    path: 'edit/:id',
    handle: {
      label: '编辑客户',
    },
    element: (
      <Loading>
        <Edit />
      </Loading>
    ),
  },
  {
    path: 'list',
    handle: {
      label: '客户列表',
      authorzation: ['customer'],
    },
    element: (
      <Loading>
        <List />
      </Loading>
    ),
  },
]
