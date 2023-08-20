import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/layout/nav.css'

const Nav = () => {
  return (
    
    <nav className="navbar navbar-expand-lg  bg-body-secondary" >
  <div className="container-fluid navbar w-100" >
    
    
    <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarNav">
      <ul className="navbar-nav  ">
        <li className="nav-item "><Link className='nav-link active' to='/' > Home</Link></li>
        
        
        <li className="nav-item">
        <Link className='nav-link active' to='/Nosotros'>Nosotros</Link></li>

        
        <li className="nav-item">
        <Link className='nav-link active' to='/Productos' >Productos</Link></li>

        
        <li className="nav-item">
        <Link className='nav-link active' to='/Servicios' >Servicios</Link></li>

      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Nav