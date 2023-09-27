import React from 'react'
import "./Contacto.css"

function Contactos() {
    return (
        <>
            <section className='container '>
                {/* Formulario */}

                <div className="row">

                    <div className="col-xl-4 bg-light bg-total-contacto order-1 order-xl-2 mb-3">
                        <div className="card border-0 bg-light mt-xl-5">
                            <div className="card-body p-0 p-xl-4 py-lg-5">
                                <div className="d-flex caja-contenido align-items-center justify-content-center">
                                    <div className="text-center">
                                        <p className="text-muted mb-4">
                                            Contactanos
                                            <br />
                                            <div>

                                                <a href="#!">
                                                    equipolibreando@gmail.com
                                                </a>
                                            </div>
                                            <div>
                                                <a
                                                    className="fs-5 px-2 link-dark text-decoration-none"
                                                    href="https://wa.me/541139004966"
                                                >
                                                    <i className="bi-whatsapp"></i>
                                                    &nbsp;541139004966
                                                </a>
                                            </div>
                                        </p>
                                        <div className="h6 fw-bolder">
                                            Síguenos!
                                        </div>
                                        <a
                                            className="fs-5 px-2 link-dark text-decoration-none"
                                            href="https://www.instagram.com/equipolibreando/"
                                        >
                                            <i className="bi-instagram"></i>
                                            &nbsp;equipolibreando
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-8 text-center order-2 order-xl-1'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0MDWX-Z9lc5-L32x5Tct8JTzAmWLSR9vJjZSAB1KT0yL9mg/viewform?embedded=true" className='google-form' frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contactos