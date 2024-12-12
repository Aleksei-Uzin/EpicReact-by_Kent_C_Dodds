import { Box } from './Box'
import './styles.css'

const smallBox = (
  <Box size="small" styles={{ backgroundColor: 'lightblue' }}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" styles={{ backgroundColor: 'pink' }}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" styles={{ backgroundColor: 'orange' }}>
    large orange box
  </Box>
)

export const Styling = () => {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}
