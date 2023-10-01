import React from "react";
import BotonRuta from './botones/BotonRuta'

function CartaMain(props) {
    const mostrarBoton = props.mostrarBoton
    return (
        <>
            <div className="container d-flex justify-content-center mt-4">
                <div className="mb-3 rounded-4 card border-none">
                    <div className="row g-0 ">
                        <div className={`col-lg-6 ${props.classNameImagenCard}`}>
                            <img
                                src={props.imgCard}
                                className="img-fluid rounded-4"
                                alt={`${props.altImagenCard}`}
                            />
                        </div>
                        <div className={`col-lg-6 ${props.classNameDescripcionCard}`}>
                            <div className="card-body">
                                <h3 className="card-title">
                                    {props.tituloCard}
                                </h3>
                                <p className="card-text fs-5  fs-xl-1">
                                    {props.textoDescripcionCard}
                                </p>
                                {mostrarBoton && <BotonRuta btnTexto={props.btnTexto} btnRuta={props.btnRuta}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartaMain;
