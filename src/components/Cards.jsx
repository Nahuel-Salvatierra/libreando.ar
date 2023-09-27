import React from "react";
import ButonRuta from './../components/bottones/BotonRuta'

function CartaMain(props) {
    const mostrarBoton = props.mostrarBoton
    return (
        <>
            <div className="container d-flex justify-content-center mt-4">
                <div className="card mb-3 rounded-4">
                    <div className="row g-0 ">
                        <div className={`col-md-6 ${props.classNameImagenCard}`}>
                            <img
                                src={props.imgCard}
                                className="img-fluid rounded-start"
                                alt={`${props.altImagenCard}`}
                            />
                        </div>
                        <div className={`col-md-6 ${props.classNameDescripcionCard}`}>
                            <div className="card-body">
                                <h3 className="card-title">
                                    {props.tituloCard}
                                </h3>
                                <p className="card-text fs-5  fs-xl-1">
                                    {props.textoDescripcionCard}
                                </p>
                                {mostrarBoton && <ButonRuta btnTexto={props.btnTexto} btnRuta={props.btnRuta}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartaMain;
