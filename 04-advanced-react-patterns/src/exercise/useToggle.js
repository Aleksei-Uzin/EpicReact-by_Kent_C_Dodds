import * as React from 'react'

const actionTypes = {
  toggle: 'TOGGLE',
  reset: 'RESET',
  on: 'ON',
  off: 'OFF',
}

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args))

function toggleReducer(state, {type, initialState}) {
  switch (type) {
    case actionTypes.toggle: {
      return {on: !state.on}
    }
    case actionTypes.reset: {
      return initialState
    }
    case actionTypes.on: {
      return {on: true}
    }
    case actionTypes.off: {
      return {on: false}
    }
    default: {
      throw new Error(`Unhandled type: ${type}`)
    }
  }
}

function useToggle({initialOn = false, reducer = toggleReducer} = {}) {
  const {current: initialState} = React.useRef({on: initialOn})
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const {on} = state

  const toggle = () => dispatch({type: actionTypes.toggle})
  const reset = () => dispatch({type: actionTypes.reset, initialState})
  const setOn = () => dispatch({type: actionTypes.on})
  const setOff = () => dispatch({type: actionTypes.off})

  function getTogglerProps({onClick, ...props} = {}) {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      ...props,
    }
  }

  function getResetterProps({onClick, ...props} = {}) {
    return {
      onClick: callAll(onClick, reset),
      ...props,
    }
  }

  return {
    on,
    setOff,
    setOn,
    toggle,
    reset,
    getTogglerProps,
    getResetterProps,
  }
}

export {actionTypes, toggleReducer, useToggle}
