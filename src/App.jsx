import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Pages/Blog'
import Shop from './components/Pages/Shop'
import Cart from './components/Pages/Cart'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './components/Pages/About'
import Checkout from './components/Pages/Checkout'
import Contact from './components/Pages/Contact'
import Service from './components/Pages/Service'
import Home from './components/Pages/Home'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/services' element={<Service/>}/>


    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
