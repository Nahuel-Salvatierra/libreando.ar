import React from 'react'
// Imagenes
import logo from '../imagenes/logo.png'
// Ruta Nav
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-naranja  NAVBAR">
                <div className="container px-5">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className='logo-libre-ando' alt="logo-LibreAndo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* Ruta Servicios */}
                            <Link to="/" className="navbar-brand"> <li className="nav-item">Inicio</li> </Link>
                            <li className="nav-item dropdown">
                            
                                <Link to="#" className="nav-link dropdown-toggle text-white pt-1 me-1" id="navbarDropdownBlog" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Servicios</Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><Link to="/tratamientos" className="dropdown-item">Tratamientos</Link></li>
                                    <li><Link to="/talleres" className="dropdown-item">Talleres</Link></li>
                                    <li><Link to="/orientacion" className="dropdown-item">Otros servicios</Link></li>
                                </ul>
                            </li>
                            {/* Contacto */}
                            <Link to="/contacto" className="navbar-brand"> <li className="nav-item">Contacto</li> </Link>
                            {/* Quienes Somos */}
                            <Link to="/quienesSomos" className="navbar-brand"> <li className="nav-item">¿Quienes somos?</li> </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
// <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
//     <li><Link to="/psicologia" className="dropdown-item">Psicología</Link></li>
//     <li><Link to="/psicopedagogia" className="dropdown-item">Psicopedagogía</Link></li>
//     <li><Link to="/terapiaOcupacional" className="dropdown-item">Terapia Ocupacional</Link></li>
//     <li><Link to="/estimulacionTemprana" className="dropdown-item">Estimulación Temprana</Link></li>
// </ul>