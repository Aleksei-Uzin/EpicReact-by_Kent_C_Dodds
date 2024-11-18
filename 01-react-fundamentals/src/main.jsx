import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { App } from './exercise/05-Styling/App'
// import { App } from './exercise/06-Forms/App'
import { App } from './exercise/07-Rendering_Arrays/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
