import React from "react";

function Presentacion({classNameImagenCard, imgCard, altImagenCard, tituloCard, classNameDescripcionCard, textoDescripcionCard}) {
    return (
        <>
            <div className="container d-flex justify-content-center mt-4">
                <div className="card mb-3 rounded-4">
                    <div className="row g-0 ">
                        <div className={`col-md-6 ${classNameImagenCard}`}>
                            <img
                                src={imgCard}
                                className="img-fluid rounded-start"
                                alt={`${altImagenCard}`}
                            />
                        </div>
                        <div className={`col-md-6 ${classNameDescripcionCard}`}>
                            <div className="card-body">
                                <h3 className="card-title">
                                    {tituloCard}
                                </h3>
                                <p className="card-text fs-5  fs-xl-1">
                                    {textoDescripcionCard}
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Equipo Libreando
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Presentacion;
