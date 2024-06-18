import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child =>
    typeof child.type === 'function'
      ? React.cloneElement(child, {
          toggle,
          on,
        })
      : child,
  )
}

const ToggleOn = ({children, on}) => (on ? children : null)
const ToggleOff = ({children, on}) => (!on ? children : null)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App
