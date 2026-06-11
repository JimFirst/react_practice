import createRouter from './routes';
import { RouterProvider } from 'react-router-dom';
import { Suspense, StrictMode } from 'react';
import { Skeleton, App as AntdApp, ConfigProvider } from 'antd';
import antdConfig from './antdConfig';
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from '@ant-design/cssinjs';

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Skeleton active />}>
        <StyleProvider
          hashPriority="high"
          transformers={[legacyLogicalPropertiesTransformer]}
        >
          <ConfigProvider {...antdConfig}>
            <AntdApp>
              <RouterProvider router={createRouter()}></RouterProvider>
            </AntdApp>
          </ConfigProvider>
        </StyleProvider>
      </Suspense>
    </StrictMode>
  );
}

export default App;