import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <div className='bg-[linear-gradient(#f5f5f5,#ffffff)]'>
    <App />

      </div>
    </HashRouter>
   </StrictMode>
)
