import React from 'react'
import '../../styles/layout/footer.css'

const Footer = () => {
  return (
    

      <footer className='bg-dark text-white'>
        <div className="container">
            <nav className='row' >
                <a  className='col-6 text-reset text-uppercase text-decoration-none d-flex align-items-center' ><img src="bicycle.png" alt="bici" className='img-logo mr-2 bici' />Bicicleteria Gingins</a>
                
                <ul className="col-6 list-unstyled">
                 
                  <li className='font-weight-bold d-flex justify-content-center' >Redes Sociales</li>
                  <li className='d-flex justify-content-between' >

                    <a href="https://www.facebook.com/BicicleteriaGingins" target="_blank"  className='text-reset'><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/bicicleteriagingins_brc/" target="_blank" className='text-reset'><i className="fa-brands fa-instagram"></i></a>
                    <a href ="https://wa.me/5492944539999?text=Hola+quisiera+contactarte" target="_blank"  ><i className=" fa-brands fa-whatsapp" ></i></a>
                        
                  </li>

                </ul>
            
            </nav>
        </div>

      </footer>
     


    
  )
}

export default Footer