import React from "react";
import Taller from "./Taller";
import TallerUnoImg1 from "../../imagenes/talleres/Taller de Habilidades Sociales.jpg";
import TallerUnoImg2 from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.18 PM (1).jpeg";
import TallerUnoImg3 from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.19 PM.jpeg";
import TallerDosImg1 from "../../imagenes/talleres/Taller de Arteterapia.jpg"
import TallerDosImg2 from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.05 PM (1).jpeg";
import TallerDosImg3 from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.13 PM.jpeg";
import TallerTresImg1 from "../../imagenes/talleres/Taller de Actividades de la Vida Diaria.jpg";
import TallerTresImg2 from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.17 PM (1).jpeg"
import TallerTresImg3 from "../../imagenes/alumnos/WhatsApp Image 2023-09-21 at 4.41.18 PM.jpeg"

function Talleres() {
  return (
    <>
      <Taller
        titulo={"Taller de Habilidades Sociales"}
        imagenTallerUno={TallerUnoImg1}
        imagenTallerDos={TallerUnoImg2}
        imagenTallerTres={TallerUnoImg3}
        id={1}
        descripcion={
          <>
            Los talleres de habilidades sociales son propuestas grupales que
            tienen como objetivo ayudar a niños/as y adolescentes en el
            desarrollo y mejora de sus habilidades en las interacciones
            sociales. Se proporcionan recursos, herramientas y estrategias para
            desenvolverse más adecuadamente en interacciones comunicativas con
            pares y adultos. Los talleres resultan una propuesta especialmente
            útil para aquellos/as que experimentan dificultades al interactuar
            con personas en diversos contextos, como la escuela, actividades
            recreativas o situaciones cotidianas
          </>
        }
      />
      <Taller
        titulo={"Taller de Arteterapia"}
        imagenTallerUno={TallerDosImg1}
        imagenTallerDos={TallerDosImg2}
        imagenTallerTres={TallerDosImg3}
        descripcion={
          <>
            Los talleres de Arteterapia ofrecen una oportunidad única y poderosa
            para explorar y expresar las emociones a través de la creatividad y
            la expresión artística. Los participantes liberan tensiones y
            descubren nuevas perspectivas sobre sí mismos mientras comparten
            esta experiencia con otros.
          </>
        }
        id={2}
      />
      <Taller
        titulo={"Taller de Actividades de la Vida Diaria "}
        imagenTallerUno={TallerTresImg1}
        imagenTallerDos={TallerTresImg2}
        imagenTallerTres={TallerTresImg3}
        descripcion={
          <>
            En el espacio de talleres de Actividades de la Vida cotidiana se
            ofrecen herramientas enfocadas en ayudar a las personas a
            desarrollar las habilidades necesarias para llevar a cabo diversas
            tareas diarias de manera independiente y satisfactoria. Estas
            actividades se relacionan con distintos aspectos tales como: la
            higiene personal, la alimentación, la limpieza, el autocuidado, el
            manejo de dinero y las habilidades recreativas, entre otras. El
            objetivo principal es aumentar la independencia y mejorar la calidad
            de vida de las personas que participan en el taller.
          </>
        }
        id={3}
      />
    </>
  );
}

export default Talleres;
