import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Appl from './App.jsx'
import RegistrationForm from './reg.jsx'
  import './index.css'
import './App.css'
import './reg.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Appl></Appl>
      <Routes>
         <Route path='/login' Component={Appl}/>
         <Route path='/reg' Component={RegistrationForm}/>
      </Routes>
      </BrowserRouter>
     
    </StrictMode>,
)
