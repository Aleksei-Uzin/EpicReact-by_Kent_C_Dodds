import { Box } from './Box'
import './styles.css'

const smallBox = (
  <Box size="small" style={{ backgroundColor: 'lightblue' }}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{ backgroundColor: 'pink' }}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{ backgroundColor: 'orange' }}>
    large orange box
  </Box>
)

export const App = () => {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}
