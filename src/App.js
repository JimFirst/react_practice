import router from './routes/index'
import { RouterProvider} from 'react-router-dom'
import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}>
      </RouterProvider>
      </Suspense>
    );
}

export default App;
