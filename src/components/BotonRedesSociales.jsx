import React, { useState, useEffect } from 'react';

function BotonRedesSociales() {
    const [showRedes, setShowRedes] = useState(true);

    useEffect(() => {
        const btnMensaje = document.querySelector('.btn-mensaje');

        const btnToggle = () => {
            setShowRedes(!showRedes);
        };

        btnMensaje.addEventListener('click', btnToggle);

        return () => {
            btnMensaje.removeEventListener('click', btnToggle);
        };
    }, [showRedes]);

    return (
        <div className='container-icon'>
            <div className={`redes ${showRedes ? 'show' : 'hide'}`}>
                <a href="https://wa.me/541165776749" target="_blank" className='icono-whatsapp'>
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.instagram.com/n4h92" target="_blank">
                    <i className="bi bi-instagram icono-instagram"></i>
                </a>
            </div>
            <div className="btn-mensaje text-white">
                <i className="bi bi-chat-dots-fill icon-mensaje"></i>
            </div>
        </div>
    );
}

export default BotonRedesSociales;
