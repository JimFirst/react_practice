import { useState } from 'react'
import Hello from '../../components/Hello'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store'
function Home() {
  const store = useStore()
  console.log(store)
  const [c, SetC] = useState(0)
  function add() {
    store.login()
    SetC(c + 1111)
  }

  const navigate = useNavigate()
  function toDetai() {
    navigate('/home/1', {
      name: 1,
    })
  }

  return (
    <div>
      <div>Hello, {store.name}</div>
      <button onClick={add}>add</button>
      <button onClick={toDetai}>detail</button>
      <Hello count={c}></Hello>
    </div>
  )
}

export default Home
