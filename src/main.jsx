import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "flowbite/dist/flowbite.min.js"
import CounterContextProvider from './Context/CounterContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
    <App />
    </CounterContextProvider>
    
  </StrictMode>,
)
