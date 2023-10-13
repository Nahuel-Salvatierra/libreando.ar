import React, { useRef, useEffect, useState } from 'react';
import BotonRuta from "./../botones/BotonRuta";

export default function CardVideo(props) {
  const mostrarBoton = props.mostrarBoton;
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0.03);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);
  return (
    <>
      <div className="container d-flex justify-content-center mt-4">
        <div className="rounded-4 card border-none">
          <div className="row g-0 ">
            <div className={`col-lg-6 ${props.classNameImagenCard}`}>
              <video 
                controls
                autoPlay
                ref={videoRef}
                onLoadedData={() => {
                  videoRef.current.volume = volume;
                }}
                src={props.imgCard}
                className="img-fluid rounded-4"
                alt={`${props.altImagenCard}`}
              />
            </div>
            <div className={`col-lg-6 ${props.classNameDescripcionCard}`}>
              <div className="card-body">
                <h3 className="card-title">{props.tituloCard}</h3>
                <p className="card-text fs-5">
                  {props.textoDescripcionCard}
                </p>
                {mostrarBoton && (
                  <BotonRuta
                    btnTexto={props.btnTexto}
                    btnRuta={props.btnRuta}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
