import React from 'react';
import './Acordeon.css'
import ButtonLink from '../botones/BotonLink'
import { WHATSAPP } from '../../common/constantes';

function PregComp({ id, tituloPregunta, descripcionRespuesta, abierto, onToggle }) {
    const collapseId = `collapse-${id}`; // Generar un identificador único para el colapso

    return (
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button
                    className={`accordion-button bg-naranja-claro fs-4 ${abierto ? '' : 'collapsed'}`}
                    data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} // Usar el identificador único
                    type="button"
                    onClick={onToggle}
                >
                    {tituloPregunta}
                </button>
            </h3>
            <div className={`accordion-collapse collapse ${abierto ? 'show' : ''}`} id={collapseId}>
                <div className="accordion-body bg-light fs-5">
                    {descripcionRespuesta}{' '}
                    
                    
                </div>
                <div className='p-3 bg-light'><ButtonLink texto={'pedir Turno'} link={WHATSAPP}/></div>
            </div>
        </div>
    );
}

export default PregComp;
