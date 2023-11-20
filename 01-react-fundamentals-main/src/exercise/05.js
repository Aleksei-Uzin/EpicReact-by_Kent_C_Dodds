import * as React from 'react'
import '../box-styles.css'

const Box = ({color = '', className = '', size = '', children, ...props}) => {
  const boxStyles = Object.assign(
    {fontStyle: 'italic'},
    {backgroundColor: color},
  )
  const sizeClassName = size && `box--${size}`

  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={boxStyles}
      {...props}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box color="lightblue" size="small">
        small lightblue box
      </Box>
      <Box color="pink" size="medium">
        medium pink box
      </Box>
      <Box color="orange" size="large">
        large orange box
      </Box>
    </div>
  )
}

export default App
