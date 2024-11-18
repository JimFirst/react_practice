import { Button, Result } from 'antd-mobile'
import { useNavigate } from 'react-router'

export default function Page404() {
  const navigate = useNavigate()
  function backHome() {
    navigate('/')
  }

  return (
    <>
      <Result
        status="error"
        title="404"
        description="对不起，你访问的页面可能不存在或者暂无权限."
      />
      <div style={{ textAlign: 'center' }}>
        <Button onClick={backHome} color="primary">
          返回首页
        </Button>
      </div>
    </>
  )
}
