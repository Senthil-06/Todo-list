import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {TodoWrapper} from './TodoWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoWrapper />
  </StrictMode>,
)
