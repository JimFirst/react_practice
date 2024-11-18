import { lazy } from 'react'
import Loading from './Loading'
const Detail = lazy(() => import('@/pages/sample/Detail'))
const Scene = lazy(() => import('@/pages/sample/Scene'))
export default [
  {
    path: 'detail',
    element: (
      <Loading>
        <Detail />
      </Loading>
    ),
    handle: {
      title: '仓库详情',
    },
  },
  {
    path: 'scene',
    handle: {
      title: '抽盘',
      authorzation: ['sample'],
    },
    element: (
      <Loading>
        <Scene />
      </Loading>
    ),
  },
]
