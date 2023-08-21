import React from "react";
import imgPresenntacion from "../../../imagenes/presentacion-image.jpg";

function Presentacion() {
    return (
        <>
            <div className="container d-flex justify-content-center mt-4">
                <div class="card mb-3 ">
                    <div class="row g-0 ">
                        <div class="col-md-6">
                            <img
                                src={imgPresenntacion}
                                class="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h3 class="card-title">
                                    ¡Bienvenidos a LibreAndo!
                                </h3>
                                <p class="card-text fs-5  fs-xl-1">
                                    En LibreAndo, nuestro compromiso es brindar
                                    un apoyo integral a las personas, fomentando
                                    el bienestar emocional y el desarrollo de
                                    habilidades en un ambiente cálido y ameno.
                                </p>
                                <p class="card-text">
                                    <small class="text-body-secondary">
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
