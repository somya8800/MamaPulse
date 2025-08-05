// src/main.tsx or index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import App from './App'
 // make sure Tailwind or CSS is imported

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
