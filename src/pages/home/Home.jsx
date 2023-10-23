import React from "react";
// Estilos
import "./home.css";
// Componentes
import CartaMain from "../../components/Cards";
import Presentacion from "./secciones/Presentacion";
// Imagenes
import vidPresentacion from "../../videos/Index Video.mp4";
import CarouselSwiper from "./secciones/CarouselSwiper";
import imgTratamientos from "../../imagenes/Index Tratamientos.jpg";
import imgTalleres from './../../imagenes/Index Talleres.jpg'
import { imgSrc } from "./ImgSrc";

function Home() {
  const galeriaImg = [
    {
      tituloPlantilla: "Nuestro espacio ",
      SwiperCarousel: imgSrc,
    },
  ];

  return (
    <section className="bg-light">
      {/* Card de Imagenes */}

      <Presentacion img={vidPresentacion} />
      <br />
      <br />
      <br />
      <CartaMain
        mostrarBoton={true}
        btnTexto={"Ver más"}
        btnRuta={"/tratamientos"}
        classNameImagenCard={"order-1"}
        imgCard={imgTratamientos}
        altImagenCard={"Imagen de Presentación"}
        tituloCard={"Tratamientos "}
        classNameDescripcionCard={"order-2"}
        textoDescripcionCard={
          <>
            En Libre Ando contamos con profesionales especializados en
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
        btnRuta={"/terapia"}
        classNameImagenCard={"order-1"}
        imgCard={imgTalleres}
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
