import React from "react";
// Style
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// Ruta Nav
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BotonRedesSociales from "./components/BotonRedesSociales";
// Component
import Terapia from "./pages/terapia/Terapia";
import Servicios from "./pages/servicios/Servicios";
import Home from "../src/pages/home/Home";
import Talleres from "./pages/talleres/Talleres";
import QuienesSomos from "./pages/quienesSomos/QuienesSomos";
import Footer from "./components/footer/Footer";
import Contactos from "./pages/contactos/Contactos";

// Paginas

function App() {
  return (
    <>
      <Router>
        <header>
          {/* Navegador */}
          <Nav />
        </header>

        <main className="flex-shrink-0">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            {/* Servicios                */}
            <Route path="/terapia" element={<Terapia />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/orientacion" element={<Servicios />} />
            <Route path="/evaluacion" element={<Servicios />} />
            {/* Quienes Somos */}
            <Route path="/quienesSomos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contactos />} />
          </Routes>
        </main>

        <footer>
          {/* Footer */}
          <Footer />
          <BotonRedesSociales />
        </footer>
      </Router>
    </>
  );
}

export default App;

{
  /* <Route path="/psicologia" element={<Terapia />} />
<Route path="/psicopedagogia" element={<Terapia />} />
<Route path="/terapiaOcupacional" element={<Terapia />} />
<Route path="/estimulacionTemprana" element={<Terapia />} /> */
}
