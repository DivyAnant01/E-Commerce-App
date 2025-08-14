import React from 'react'
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav  from './components/nav/Nav';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App