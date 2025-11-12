import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Fealiyyet from './pages/Fealiyyet'
import Karyera from './pages/Karyera'
import Xeberler from './pages/Xeberler'
import Elaqe from './pages/Elaqe'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/fealiyyet' element={<Fealiyyet/>} />
        <Route path='/karyera' element={<Karyera/>} />
        <Route path='/xeberler' element={<Xeberler/>} />
        <Route path='/elaqe' element={<Elaqe/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter