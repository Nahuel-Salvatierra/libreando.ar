import React, { Component } from 'react';
// Style
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Ruta Nav
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
// import { Instagram } from './components/instagramFeed/instagramFeed';
// Component

// Paginas


function App() {

  return (
    <>
      <Router>        

        <header>
          {/* Navegador */}
          <Nav />
        </header>

        <main className='flex-shrink-0'>
          <Routes>       
            {/* Home */}
            {/* <Route path="/" element={<Home />} />*/}
            {/* Servicios                */}
            {/* <Route path="/orientacion" element={<Servicios />} /> */}
            {/* <Route path="/evaluacion" element={<Servicios />} /> */}
            {/* Terapia */}
            {/* <Route path="/psicologia" element={<Terapia />} /> */}
            {/* <Route path="/psicopedagogia" element={<Terapia />} /> */}
            {/* <Route path="/terapiaOcupacional" element={<Terapia />} /> */}
            {/* <Route path="/estimulacionTemprana" element={<Terapia />} /> */}
            {/* Talleres */}
            {/* <Route path="/talleres" element={<Talleres />} /> */}
          </Routes>
          
          {/* <Instagram/> */}

        </main>

        <footer>
          {/* Footer */}
          {/* <Footer /> */}
        </footer>

      </Router>
    </>
  )
}

export default App
