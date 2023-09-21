import React from "react";
import CartaMiembros from "./CartaMiembros";
import miembroUno from "./../../imagenes/miembros/178771976_190419362998884_9181539605956965169_n.jpg";

function Miembros() {
    return (
        <div>
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Nuestro equipo</h2>
                        <p className="lead fw-normal text-muted mb-5">
                            Creando sonrisas detrás de escena.
                        </p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center ">
                        <CartaMiembros
                            imagen={miembroUno}
                            nombre={"Gabriel"}
                            titulo={"Psicologo"}
                        />
                        <CartaMiembros
                            imagen={miembroUno}
                            nombre={"Gabriel"}
                            titulo={"Psicologo"}
                        />
                        <CartaMiembros
                            imagen={miembroUno}
                            nombre={"Gabriel"}
                            titulo={"Psicologo"}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Miembros;
