import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Helmet } from 'react-helmet'
import GlobalStyle from './config/Global.styled.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
    </Helmet>
    <App />
  </React.StrictMode>,
)
