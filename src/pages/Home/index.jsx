import { useState } from 'react'
import Hello from '../../components/Hello'
import { useNavigate } from 'react-router-dom'
import services from '@/services'

function Home() {
  const [c, SetC] = useState(0)
  function add() {
    SetC(c + 1111)
  }

  const navigate = useNavigate()
  function toDetai() {
    navigate('/home/1', {
      name: 1,
    })
  }
  test()
  async function test() {
    await services.user.login()
  }
  return (
    <div>
      <div>Home</div>
      <button onClick={add}>add</button>
      <button onClick={toDetai}>detail</button>
      <Hello count={c}></Hello>
    </div>
  )
}

export default Home
