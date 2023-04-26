import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global.ts'
import { Router } from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
    <GlobalStyles />
  </React.StrictMode>,
)
