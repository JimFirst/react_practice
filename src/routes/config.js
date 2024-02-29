import Home from "../pages/Home";
import User from "../pages/User";
import BaseLayouts from '../layouts';
// import HomeDetail from "../pages/Home/HomeDetail";
import { lazy } from "react";


const config = [{
    path: '/',
    Component: BaseLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'home/:id',
        Component: lazy(() => import('../pages/Home/HomeDetail')),
        loader: (params) => {
          console.log('loader', '可以鉴权，也可以获取列表数据', params)
          return 111
        }
      },
      {
        path: 'user',
        Component: User
      }
    ]
}]
export default config