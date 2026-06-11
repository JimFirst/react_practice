import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ConfigProvider } from 'antd';

const root = createRoot(document.getElementById('root')!);
root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
);