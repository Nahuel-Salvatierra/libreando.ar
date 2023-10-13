import React from "react";
// Css
import "./QuienesSomos.css";
// Componentes
import Cards from "../../components/Cards";
import imgQuienesSomos from "../../imagenes/miembros/hernandez-psicologos.jpg";
import imgTalleres from "./../../videos/Snapinsta.app_video_10000000_838606020944698_4477998613101165365_n.mp4";
import Miembros from "./Miembros";
import CardVideo from "./../../components/cartas/card.video";

function QuienesSomos() {
  return (
    <section className="bg-light">
      <section className="container bg-light">
        <div className="quienesSomos m-0 text-center pt-4 pb-4">
          {/* Quienes Somos */}
          <div>
            <h2 className="fs-1"> ¿Quienes somos?</h2>
            <p className="fs-4">
              En <strong>LibreAndo</strong> ofrecemos una amplia gama de
              servicios terapéuticos destinados a abordar diversas necesidades y
              desafíos. Ya sea que estés buscando mejorar tus habilidades de
              afrontamiento, fortalecer tus relaciones interpersonales o
              explorar tu bienestar emocional, nuestro equipo terapéutico puede
              ofrecerte las herramientas necesarias para guiarte en cada paso
              del camino.
            </p>
          </div>
        </div>
        {/* Nuestra mision */}
        <CardVideo
          classNameImagenCard={"order-1"}
          imgCard={imgTalleres}
          altImagenCard={"Imagen de Presentación"}
          tituloCard={"Nuestra Misión"}
          classNameDescripcionCard={"order-2"}
          textoDescripcionCard={
            <>
              Libreando nace como una propuesta alternativa a los dispositivos
              clínicos clásicos y rígidos. Nuestro espacio ofrece proyectos
              dinámicos, interdisciplinarios, individuales y grupales que buscan
              generar las condiciones necesarias para acompañar el desarrollo
              vital de quienes asisten.
            </>
          }
          mostrarBoton={false}
        />
        <br />
        <br />
        <br />

        <Cards
          classNameImagenCard={"order-2"}
          imgCard={imgQuienesSomos}
          altImagenCard={"Imagen de Presentación"}
          tituloCard={"Nuestro Equipo Terapéutico"}
          classNameDescripcionCard={"order-1"}
          textoDescripcionCard={
            <>
              Contamos con un equipo de profesionales dedicados y comprometidos
              con el acompañamiento de cada persona y familia que asiste a
              nuestro espacio. Cada miembro de nuestro equipo posee una amplia
              experiencia y conocimientos en su campo. Llevamos la
              interdisciplina y la grupalidad como bandera, entendiendo que el
              trabajo colaborativo es el mejor camino hacia el desarrollo
              personal.
            </>
          }
          mostrarBoton={false}
        />
      </section>
      <Miembros />
    </section>
  );
}

export default QuienesSomos;
