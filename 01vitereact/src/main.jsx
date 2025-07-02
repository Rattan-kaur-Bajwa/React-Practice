import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// This code initializes a React app using the modern createRoot API, rendering the <App /> component inside the HTML element with ID root. It wraps the app in <StrictMode> to enable extra development checks for potential issues.