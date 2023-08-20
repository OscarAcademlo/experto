import React from 'react'
import '../../styles/pages/home.css'

const Home = () => {
  return (
    <div className='container__home  ' > 
    <div className="titulo">
    <h1>Esta es nuestra casa</h1>
    </div>
    <div className="home">
    <div className="img">
    <img className='foto_home' src="/bici.jpg" alt="" />
    </div>

    <h4 className='textfooter'>
    Somos tercera generación de bicicleteros en Bariloche,50 años en el rubro y en nuestra empresa llevamos 15 años acompañando a nuestros clientes con la mejor atención y los mejores precios.
    </h4>
    
    
    </div>
    
</div>
  )
}

export default Home