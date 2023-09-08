import React from "react";
import Pblc from "./Pbcd";

function Footer() {
    return (
        <section className="container-flex bg-naranja pt-3 pb-1">
            <div className="row align-items-center  text-center justify-items-center">
                <div className="d-flex justify-content-center row">
                    <h6 className="col-12 col-md-3">
                        <i class="bi bi-geo-alt-fill text-black"></i>Moron centro
                    </h6>
                    <a className="col-12 col-md-3 ms-3 text-decoration-none text-black">equipolibreando@gmail.com</a>
                    <p className="col-12 col-md-3 "><i className="bi bi-instagram icono-instagram"></i><a className="text-decoration-none text-black" href="http://www.instagram.com/equipolibreando" target="blank"> equipoLibreando</a></p>
                </div>
                <div className="align-self-end Pblc">
                    <Pblc />
                </div>
            </div>
        </section>
    );
}

export default Footer;
