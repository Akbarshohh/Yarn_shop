import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import FirstPage from './components/FirstPage/FirstPage'
import Login from './components/Login/Login'
import Menu from './components/MainMenu/Menu'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<FirstPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
