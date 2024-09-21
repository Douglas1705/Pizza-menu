import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './globalStyle/globalStyle.js'
import Header from './layoutPage/header/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Header />
    <GlobalStyle />
  </StrictMode>,
  
)
