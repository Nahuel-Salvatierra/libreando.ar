import React from "react";
// Estilos
import "./home.css";
// Componentes
import CartaMain from "../../components/Cards";
import Presentacion from "./secciones/Presentacion";
// Imagenes
import imgPresentacion from "../../imagenes/presentacion-image.jpg";
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
    <>
      {/* Card de Imagenes */}

      <Presentacion img={imgPresentacion} />
      <CartaMain
        btnTexto={"Ver más"}
        btnRuta={"/talleres"}
        classNameImagenCard={"order-2"}
        imgCard={imgPromoTaller}
        altImagenCard={"Imagen de Presentación"}
        tituloCard={
          "Descubre un Mejor Tú: Nuestros Exclusivos Talleres Te Esperan"
        }
        classNameDescripcionCard={"order-1"}
        textoDescripcionCard={
          "Explora un mundo de crecimiento personal y bienestar emocional a través de nuestros talleres especializados. Conducidos por expertos en psicología, nuestros programas te ayudarán a desarrollar habilidades clave y a explorar tu creatividad de una manera única. Aprovecha esta oportunidad para invertir en ti mismo y transformar tu vida."
        }
      />
      <CartaMain
        btnTexto={"Ver más"}
        btnRuta={"/terapia"}
        classNameImagenCard={"order-1"}
        imgCard={imgPresentacion}
        altImagenCard={"Imagen de Presentación"}
        classNameDescripcionCard={"order-2"}
        textoDescripcionCard={
          "En LibreAndo, nuestro compromiso es brindar un apoyo integral a las personas, fomentando el bienestar emocional y el desarrollo de habilidades en un ambiente cálido y ameno."
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
    </>
  );
}

export default Home;
