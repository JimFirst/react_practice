import createRouter from './routes/index'
import { RouterProvider } from 'react-router-dom'
import { Suspense, StrictMode } from 'react'
import { Skeleton, ConfigProvider } from 'antd-mobile'
import antdConfig from './antdConfig'

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Skeleton active />}>
        <ConfigProvider {...antdConfig}>
          <RouterProvider router={createRouter()}></RouterProvider>
        </ConfigProvider>
      </Suspense>
    </StrictMode>
  )
}

export default App
