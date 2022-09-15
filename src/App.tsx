import React from 'react'
import MainPage from './pages/MainPage'
import './styles/global.scss'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/cart'} element={<CartPage />} />
          <Route path={'/*'} element={<div> Page not found</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
