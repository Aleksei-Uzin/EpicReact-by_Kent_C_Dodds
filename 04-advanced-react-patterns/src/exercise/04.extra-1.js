import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  const togglerProps = {
    'aria-pressed': on,
    onClick: toggle,
  }

  return {on, toggle, togglerProps}
}

function App() {
  const {on, togglerProps} = useToggle()

  const handleClick = () => {
    console.info('onButtonClick')
    togglerProps.onClick()
  }

  return (
    <div>
      <Switch on={on} {...togglerProps} />
      <hr />
      <button
        aria-label="custom-button"
        {...togglerProps}
        onClick={handleClick}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App
