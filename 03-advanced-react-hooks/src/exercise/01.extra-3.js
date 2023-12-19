import * as React from 'react'

function countReducer(state, action) {
  return {
    ...state,
    ...(typeof action === 'function' ? action(state) : state),
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setCount(currentState => ({count: currentState.count + step}))
  // or
  // const increment = () => setCount({count: count + step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
