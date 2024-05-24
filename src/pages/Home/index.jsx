import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function toDetai() {
    navigate('/customer/list')
  }

  return (
    <div>
      <Button onClick={toDetai}>customer</Button>
    </div>
  )
}

export default Home
