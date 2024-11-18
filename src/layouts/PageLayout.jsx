import { NavBar } from 'antd-mobile'
import { Outlet, useMatches, useNavigate } from 'react-router-dom'

const Layout = ({ header = true }) => {
  const matchs = useMatches()
  const getTitle = () => {
    return matchs[matchs.length - 1].handle?.title
  }
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#f5f6f8',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {header ? (
        <>
          <NavBar
            back="返回"
            onBack={back}
            backArrow={false}
            style={{ flexShrink: 0 }}
          >
            {getTitle()}
          </NavBar>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <Outlet />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default Layout
