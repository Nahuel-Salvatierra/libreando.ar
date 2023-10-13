import React from "react";
// Estilos
import "./home.css";
// Componentes
import CartaMain from "../../components/Cards";
import Presentacion from "./secciones/Presentacion";
// Imagenes
import imgPresentacion from "../../imagenes/alumnos/383821858_984326632846690_3348536675621121014_n.jpeg";
import CarouselSwiper from "./secciones/CarouselSwiper";
import imgPromoTaller from "../../imagenes/taller/WhatsApp Image 2023-09-06 at 5.45.35 PM.jpeg";
import { imgSrc } from "./ImgSrc";

function Home() {
  const galeriaImg = [
    {
      tituloPlantilla: "Nuestra Institución",
      SwiperCarousel: imgSrc,
    },
  ];

  return (
    <section className="bg-light">
      {/* Card de Imagenes */}

      <Presentacion img={imgPresentacion} />
      <br />
      <br />
      <br />
      <CartaMain
        mostrarBoton={true}
        btnTexto={"Ver más"}
        btnRuta={"/talleres"}
        classNameImagenCard={"order-2"}
        imgCard={imgPromoTaller}
        altImagenCard={"Imagen de Presentación"}
        tituloCard={"Tratamientos "}
        classNameDescripcionCard={"order-1"}
        textoDescripcionCard={
          <>
            En Libreando contamos con profesionales especializados en
            Psicología, Psicopedagogía, Terapia Ocupacional y Estimulación
            Temprana. Ofrecemos nuestros servicios a pacientes particulares y
            con CUD (Certificado Único de Discapacidad).
            <br />
            ¡Te invitamos a conocer nuestro espacio y nuestras propuestas!
          </>
        }
      />
      <br />
      <br />
      <br />
      <CartaMain
        mostrarBoton={true}
        btnTexto={"Ver más"}
        btnRuta={"/tratamientos"}
        classNameImagenCard={"order-1"}
        imgCard={imgPresentacion}
        altImagenCard={"Imagen de Presentación"}
        classNameDescripcionCard={"order-2"}
        tituloCard={"Talleres"}
        textoDescripcionCard={
          <>
            Los espacio de talleres son oportunidades únicas para desarrollar
            colaborativamente las habilidades personales. Proporcionamos a los
            participantes distintas herramientas y estrategias necesarias para
            desenvolverse mejor en los distintos desafíos presentes en la vida
            cotidiana.
            <br />
            Te invitamos a conocer más nuestros espacios de talleres.
          </>
        }
      />

      {/* Carouser de Imagenes */}
      <div className="mt-5">
        {galeriaImg.map((carousel, index) => (
          <CarouselSwiper
            key={index}
            tituloPlantilla={carousel.tituloPlantilla}
            SwiperCarousel={carousel.SwiperCarousel}
            classTitulo={carousel.classTitulo}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
