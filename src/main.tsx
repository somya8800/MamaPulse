// src/main.tsx or index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'

 // make sure Tailwind or CSS is imported
 const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
