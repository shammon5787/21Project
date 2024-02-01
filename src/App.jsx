import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Carts from './components/pages/Carts'
import Navbar from './components/navbar/Navbar'
import { Provider } from 'react-redux'
import store from './components/store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Carts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
