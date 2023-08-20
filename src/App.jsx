import { useState } from 'react'
import Header from './components/Layout/Header'
import Nav from './components/Layout/Nav'
import Footer from './components/Layout/Footer'
import Home from './components/pages/Home'
import Nosotros from './components/pages/Nosotros'
import Productos from './components/pages/Productos'
import Servicios from './components/pages/Servicios'
import './App.css'
import './styles/layout/header.css'
import './styles/layout/nav.css'
import './styles/pages/home.css'
import './styles/pages/nosotros.css'
import './styles/pages/productos.css'
import './styles/pages/servicios.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <div className="App">

      <Header/>
      
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/Nosotros'element={<Nosotros/>} />
      <Route path='/Productos'element={<Productos/>} />
      <Route path='/Servicios'element={<Servicios/>} />
      

      </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  )
}
      
    
  


export default App
