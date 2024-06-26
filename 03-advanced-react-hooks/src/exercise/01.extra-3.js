import * as React from 'react'

function countReducer(state, action) {
  return typeof action === 'function'
    ? {...state, ...action(state)}
    : {...state, ...action}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
