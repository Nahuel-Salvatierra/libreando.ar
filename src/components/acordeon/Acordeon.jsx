import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PregComp from './PregComp';

function Acordeon({ tituloAcordeones, PregRta, textoOpcional, classDNoneAcordeon, classTextoOpcional, mostrarBotonVerMas, classContenedorButton, classButtonAcordeon }) {
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);
    const [verMas, setVerMas] = useState(false);

    const togglePregunta = (index) => {
        if (preguntaAbierta === index) {
            setPreguntaAbierta(null);
        } else {
            setPreguntaAbierta(index);
        }
    };

    const toggleVerMas = () => {
        setVerMas(!verMas);
    }

    return (
        <>
            <h2 className="fw-bolder m-0 bg-naranja">{tituloAcordeones}</h2>
            <div className='fs-6 border bg-light rounded-bottom-1'>
                <p className={`${classTextoOpcional}`}>
                    {textoOpcional}
                </p>
                <div className={`accordion ${verMas ? "" : classDNoneAcordeon}`} >
                    {PregRta.map((contenido, index) => (
                        <PregComp
                            key={index}
                            id={uuidv4()}
                            tituloPregunta={contenido.tituloPregunta}
                            descripcionRespuesta={contenido.descripcionRespuesta}
                            abierto={preguntaAbierta === index}
                            onToggle={() => togglePregunta(index)}
                        />
                    ))}
                </div>
                {mostrarBotonVerMas &&   
                    <p className={`${classContenedorButton}`}>
                        <button className={`bg-naranja-claro border-0 rounded ${classButtonAcordeon}`} onClick={toggleVerMas}>
                            {verMas ? "Ver menos..." : "Ver más..."}
                        </button>
                    </p>
                }
            </div>
        </>
    );
}

export default Acordeon;
