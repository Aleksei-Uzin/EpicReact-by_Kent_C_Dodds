import * as React from 'react'
import {Switch} from '../switch'
import {actionTypes, toggleReducer, useToggle} from './useToggle'

/**
 * Source:
 * https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
 *
 */

function App() {
  const [timesClicked, setTimesClicked] = React.useState(0)
  const clickedTooMuch = timesClicked >= 4

  function toggleStateReducer(state, action) {
    if (clickedTooMuch && action.type === actionTypes.toggle) {
      return {on: state.on}
    }
    return toggleReducer(state, action)
  }

  const {on, getResetterProps, getTogglerProps, setOff, setOn} = useToggle({
    reducer: toggleStateReducer,
  })

  return (
    <div>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <Switch
        {...getTogglerProps({
          disabled: clickedTooMuch,
          on: on,
          onClick: () => setTimesClicked(count => count + 1),
        })}
      />
      {clickedTooMuch ? (
        <div data-testid="notice">
          Whoa, you clicked too much!
          <br />
        </div>
      ) : timesClicked > 0 ? (
        <div data-testid="click-count">Click count: {timesClicked}</div>
      ) : null}
      <button {...getResetterProps({onClick: () => setTimesClicked(0)})}>
        Reset
      </button>
    </div>
  )
}

export default App
