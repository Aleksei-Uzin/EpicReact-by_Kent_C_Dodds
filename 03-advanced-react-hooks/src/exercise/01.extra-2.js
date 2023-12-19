import * as React from 'react'

// 💰 you can write the countReducer function so you don't have to make any
// changes to the next two lines of code! Remember:
// The 1st argument is called "state" - the current value of count
// The 2nd argument is called "newState" - the value passed to setCount
function countReducer(state, action) {
  return {
    ...state,
    ...action,
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setCount({count: count + step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
