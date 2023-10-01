import React from "react";
import CarouselX3 from "./CarouselX3";
import TallerHeader from "./TallerHeader";
import { WHATSAPP } from "./../../common/constantes";
import BotonLink from '../../components/botones/BotonLink'

function Taller(props) {
  return (
    <div className="container">
      <div className="row p-4 d-flex align-items-center justify-content-center">
        <div className="col-12 col-xl-6 p-2">
          <TallerHeader titulo={props.titulo} descripcion={props.descripcion} />
          <BotonLink texto={'Solicitar'} link={WHATSAPP}/>

        </div>

        <div className="col-12 col-xl-6 pt-4">
          <CarouselX3
            imagenTallerUno={props.imagenTallerUno}
            imagenTallerDos={props.imagenTallerDos}
            imagenTallerTres={props.imagenTallerTres}
            id={props.id}
          />
        </div>
      </div>
    </div>
  );
}

export default Taller;
