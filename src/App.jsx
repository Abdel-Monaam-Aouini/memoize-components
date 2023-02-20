import {memo, useCallback, useState} from 'react'
import './App.css'

const Child1 = memo(({callback, count}) => {
  return <button onClick={() => callback()}>count is {count}</button>
})

const Child2 = memo(({callback, count}) => {
  return <button onClick={() => callback()}>count is {count}</button>
})

function Parent() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const callback1 = useCallback(() => setCount1(count => count + 1), [])
  const callback2 = useCallback(() => setCount2(count => count + 1), [])

  return (
    <div className="App">
      <div className="card">
        <Child1 callback={callback1} count={count1} />
      </div>
      <div className="card">
        <Child2 callback={callback2} count={count2} />
      </div>
    </div>
  )
}

export default Parent
