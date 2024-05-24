import createRouter, { baseRoutes, dynamicRoutes } from './routes/index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, StrictMode } from 'react'

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider
          router={createBrowserRouter([...dynamicRoutes, ...baseRoutes])}
        ></RouterProvider>
      </Suspense>
    </StrictMode>
  )
}

export default App
