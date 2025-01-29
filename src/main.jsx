import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Competencias from './Competencias.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <Competencias/>
  </StrictMode>,
)
