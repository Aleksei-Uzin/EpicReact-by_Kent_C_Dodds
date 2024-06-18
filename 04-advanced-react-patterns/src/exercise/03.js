import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()
ToggleContext.displayName = 'ToggleContext'

function useToggleContext() {
  const context = React.useContext(ToggleContext)

  if (!context) {
    throw new Error('useToggleContext should be used inside <Toggle />')
  }

  return context
}

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  const value = {on, toggle}

  return <ToggleContext.Provider value={value} {...props} />
}

const ToggleOn = ({children}) => {
  const {on} = useToggleContext()

  return on ? children : null
}

const ToggleOff = ({children}) => {
  const {on} = useToggleContext()

  return on ? null : children
}

const ToggleButton = props => {
  const {on, toggle} = useToggleContext()

  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App
