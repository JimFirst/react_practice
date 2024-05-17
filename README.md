## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

## 部署

**注意**：项目内部资源（图片、字体）请放置于@/src/assets下

```bash
$ npm start
```

## 项目结构

```
├─ public 外部静态资源目录：例如外部js。注意：图片、字体资源请放置于@/src/assets下
│  └─ index.html 入口模板，勿删
├─ src
│  ├─ index.less 全局样式
│  ├─ index.tsx 入口文件
│  ├─ App.tsx 组件入口
│  ├─ assets 内部静态资源目录
│  │  └─ images
│  │     ├─ empty.png
│  ├─ components 公用组件目录
│  ├─ constants 常量目录
│  ├─ pages 业务目录
│  │  ├─ 404.tsx
│  │  ├─ AppRouter.tsx 路由组件，勿删
│  │  └─ Layout.tsx 全局包裹组件
│  ├─ services api目录
│  │  ├─ index.ts api出口
│  │  └─ request.ts 请求工具
│  ├─ utils 工具目录
│  │  ├─ http.ts 请求工具配置、拦截
│  │  └─ storage.ts localstorage缓存工具
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ README.md

```
