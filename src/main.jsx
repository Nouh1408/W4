import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "flowbite/dist/flowbite.min.js"
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserContextProvider>
   <CounterContextProvider> {/* counter can access anything in user */}
    <App />
    </CounterContextProvider>
   </UserContextProvider>
    
  </StrictMode>,
)
