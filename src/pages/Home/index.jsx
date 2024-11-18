import { Image, Space } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  function toSceneSample() {
    navigate('/sample/scene')
  }

  const demoSrc =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
  return (
    <Space wrap>
      <Image
        src={demoSrc}
        onClick={toSceneSample}
        width={100}
        height={100}
        fit="fill"
      />
    </Space>
  )
}
