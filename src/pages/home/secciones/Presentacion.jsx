import React from "react";
import imgPresenntacion from "../../../imagenes/presentacion-image.jpg";

function Presentacion() {
    return (
        <>
            <div className="container d-flex justify-content-center mt-4">
                <div className="card mb-3 ">
                    <div className="row g-0 ">
                        <div className="col-md-6">
                            <img
                                src={imgPresenntacion}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h3 className="card-title">
                                    ¡Bienvenidos a LibreAndo!
                                </h3>
                                <p className="card-text fs-5  fs-xl-1">
                                    En LibreAndo, nuestro compromiso es brindar
                                    un apoyo integral a las personas, fomentando
                                    el bienestar emocional y el desarrollo de
                                    habilidades en un ambiente cálido y ameno.
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
