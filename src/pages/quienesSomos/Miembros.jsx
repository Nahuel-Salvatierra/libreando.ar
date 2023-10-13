import React from "react";
import CartaMiembros from "./CartaMiembros";
import miembroCuatro from "./../../imagenes/miembros/178771976_190419362998884_9181539605956965169_n.jpg";
import miembroUno from './../../imagenes/miembros/5e05fad8-b248-41ea-8ff4-5e0b61610a19.jpeg'
import miembroDos from './../../imagenes/miembros/WhatsApp Image 2023-10-09 at 3.58.47 PM.jpeg'
import mirmbroTres from './../../imagenes/miembros/melisa.jpeg'
import miembroCinco from './../../imagenes/miembros/WhatsApp Image 2023-10-09 at 4.00.26 PM2.jpeg'
import miembroDefault from '../../../src/imagenes/miembros/icono-de-perfil-avatar-predeterminado-imagen-vectorial-usuario-medios-sociales-209162840.webp'

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
                            nombre={"Sandra Ribero"}
                            titulo={"Lic. En Psicología"}
                        />
                        <CartaMiembros
                            imagen={miembroDos}
                            nombre={"Agustina Domínguez"}
                            titulo={"Lic. en Psicopedagogía"}
                        />
                        <CartaMiembros
                            imagen={mirmbroTres}
                            nombre={"Melisa Muñoz"}
                            titulo={"Lic. en Terapia Ocupacional"}
                        />
                        <CartaMiembros
                            imagen={miembroCuatro}
                            nombre={"Gabriel Soria"}
                            titulo={"Lic. En Psicología"}
                        />
                        <CartaMiembros
                            imagen={miembroCinco}
                            nombre={"Daniela Benítez"}
                            titulo={"Lic. en Psicopedagogía"}
                        />
                        <CartaMiembros
                            imagen={miembroDefault}
                            nombre={"Dana Velutti"}
                            titulo={"Lic. en Terapia Ocupacional"}
                            imagen={miembroDefault}
                            nombre={"Dana Velutti"}
                            titulo={"Lic. en Terapia Ocupacional"}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Miembros;
