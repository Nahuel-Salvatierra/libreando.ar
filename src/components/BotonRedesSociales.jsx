import React, { useState } from 'react';

function BotonRedesSociales() {
  const [showRedes, setShowRedes] = useState(false);

  const toggleRedes = () => {
    setShowRedes(!showRedes);
  };

  return (
    <div className='container-icon'>
      <div className={`redes ${showRedes ? 'show' : 'hide'}`}>
        <a href="https://wa.me/541165776749" target="_blank" className='icono-whatsapp'>
          <i className="bi bi-whatsapp "></i>
        </a>
        <a href="https://www.instagram.com/libreando" target="_blank" className=''>
          <i className="bi bi-instagram icono-instagram"></i>
        </a>
      </div>
      <div className="btn-mensaje" id='btn-mensaje' onClick={toggleRedes}>
        <i className="bi bi-chat-dots-fill  icon-mensaje"></i>
      </div>
    </div>
  );
}

export default BotonRedesSociales;
