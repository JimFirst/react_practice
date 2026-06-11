import { lazy } from 'react';
import Loading from './Loading';
import type { RouteObject } from 'react-router-dom';

const Edit = lazy(() => import('@/pages/customer/Edit'));
const List = lazy(() => import('@/pages/customer/List'));

const customerRoutes: RouteObject[] = [
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
    element: (
      <Loading>
        <Edit />
      </Loading>
    ),
    handle: {
      label: '编辑客户',
    },
  },
  {
    path: 'list',
    element: (
      <Loading>
        <List />
      </Loading>
    ),
    handle: {
      label: '客户列表',
      authorization: ['customer'],
    },
  },
];

export default customerRoutes;