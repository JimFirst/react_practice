import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header'
import SiderBar from './components/SiderBar'
const { Sider, Content } = Layout
function BaseLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        width="256px"
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <SiderBar></SiderBar>
      </Sider>
      <Layout style={{ marginLeft: 256 }}>
        <Header></Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
