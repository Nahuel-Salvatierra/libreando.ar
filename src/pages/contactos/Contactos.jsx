import React from "react";
import "./Contacto.css";
import { WHATSAPP, WHATSAPPTEL } from "../../common/constantes";

function Contactos() {
  return (
    <section className="bg-light">
      <div className="container ">
        {/* Formulario */}
        <div className="row ">
          <div className="col-xl-4 bg-total-contacto  order-1 order-xl-2 mb-3">
            <div className="card border-0  mt-xl-5">
              <div className="card-body bg-white rounded-3 py-4 p-xl-4 py-lg-5">
                <div className="d-flex caja-contenido align-items-center justify-content-center">
                  <div className="text-center">
                    <h4 className="text-muted mb-4">
                    Contactanos
                    </h4>
                      <div>
                        <a href="mailto:equipolibreando@gmail.com">equipolibreando@gmail.com</a>
                      </div>
                      <div>
                        <a
                          className="fs-5 px-2 link-dark text-decoration-none"
                          href={WHATSAPP}
                        >
                          <i className="bi-whatsapp"></i>
                          &nbsp;{WHATSAPPTEL}
                        </a>
                      </div>

                    
                    <a
                      className="fs-5 px-2 link-dark text-decoration-none"
                      href="https://www.instagram.com/equipolibreando/"
                    >
                      <i className="bi-instagram"></i>
                      &nbsp;equipolibreando
                    </a>
                    <div className="h6 fw-bolder">¡Seguinos!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 text-center order-2 order-xl-1">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc0MDWX-Z9lc5-L32x5Tct8JTzAmWLSR9vJjZSAB1KT0yL9mg/viewform?embedded=true"
              className="google-form"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactos;
