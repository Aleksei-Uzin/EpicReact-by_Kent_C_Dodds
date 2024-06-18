import * as React from 'react'

const CounterContext = React.createContext()

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1}
    case 'DECREMENT':
      return {...state, count: state.count - 1}
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CounterProvider({initialCount = 0, ...props}) {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: initialCount,
  })

  const increment = React.useCallback(() => dispatch({type: 'INCREMENT'}), [])
  const decrement = React.useCallback(() => dispatch({type: 'DECREMENT'}), [])

  const value = [state, increment, decrement]

  return <CounterContext.Provider value={value} {...props} />
}

function useCounter() {
  const context = React.useContext(CounterContext)

  if (!context) {
    throw new Error(`useCounter must be used within a CounterProvider`)
  }

  return context
}

function Counter() {
  const [state, increment, decrement] = useCounter()

  return (
    <div>
      <div>Current Count: {state.count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

export default App
