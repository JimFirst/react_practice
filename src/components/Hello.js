import { useState } from "react"

const Hello = function (props) {
  const [count, setCount] = useState(0)
  function add() {
    setCount(count => count + 1)
  }
  return (<div>
    <span>{props.count}</span>
    <div>
      <button onClick={add}>add</button>
      <span>{count}</span>
    </div>
  </div>)
}

export default Hello