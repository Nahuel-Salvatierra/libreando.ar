import React from "react";
import Taller from "./Taller";
import imagenTallerUno from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.12 PM (1).jpeg";
import imagenTallerDos from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.18 PM (1).jpeg";
import imagenTallerTres from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.19 PM.jpeg";
import tallerUno from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.05 PM.jpeg";
import tallerDos from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.05 PM (1).jpeg";
import tallerTres from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.13 PM.jpeg";

function Talleres() {
  return (
    <>
      <Taller
        titulo={
          "Para potenciar la Confianza y las Relaciones: Taller de Habilidades Sociales"
        }
        imagenTallerUno={imagenTallerUno}
        imagenTallerDos={imagenTallerDos}
        imagenTallerTres={imagenTallerTres}
        id = {1}
        descripcion="Descubre cómo mejorar las habilidades sociales con nuestro taller. Aprende a comunicarte efectivamente, construir relaciones sólidas y aumentar tu confianza personal. Impartido por expertos en psicología. ¡Únete a nosotros para una transformación personal duradera!"
      />
      <Taller
        titulo={"Explora la Creatividad Interior: Taller de Arteterapia"}
        imagenTallerUno={tallerUno}
        imagenTallerDos={tallerDos}
        imagenTallerTres={tallerTres}
        descripcion="Sumérgete en el mundo de la arteterapia y descubre cómo liberar tu creatividad para sanar emociones y mejorar tu bienestar mental. Únete a nuestro taller en línea, dirigido por profesionales de la psicología y el arte. Encuentra una nueva forma de expresión y autoexploración."
        id = {2}
      />
    </>
  );
}

export default Talleres;
