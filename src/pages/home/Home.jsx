import React from "react"
// Estilos
import './home.css'
// Componentes
import Presentacion from "../../components/Cards"
// Imagenes
import imgPresentacion from "../../imagenes/presentacion-image.jpg";
import CarouselSwiper from "./secciones/CarouselSwiper"
import { imgSrc } from "./ImgSrc";

function Home() {

    const galeriaImg = [
        {
            tituloPlantilla: "Nuestra Institución",
            SwiperCarousel: imgSrc
        },
    ]



    return (
        <>
            {/* Card de Imagenes */}
            <Presentacion
                classNameImagenCard={"order-1"}
                imgCard={imgPresentacion}
                altImagenCard={"Imagen de Presentación"}
                tituloCard={"¡Bienvenidos a LibreAndo!"}
                classNameDescripcionCard={"order-2"}
                textoDescripcionCard={
                    "En LibreAndo, nuestro compromiso es brindar un apoyo integral a las personas, fomentando el bienestar emocional y el desarrollo de habilidades en un ambiente cálido y ameno."
                }
            />
            <Presentacion
                classNameImagenCard={"order-2"}
                imgCard={imgPresentacion}
                altImagenCard={"Imagen de Presentación"}
                tituloCard={"¡Bienvenidos a LibreAndo!"}
                classNameDescripcionCard={"order-1"}
                textoDescripcionCard={
                    "En LibreAndo, nuestro compromiso es brindar un apoyo integral a las personas, fomentando el bienestar emocional y el desarrollo de habilidades en un ambiente cálido y ameno."
                }
            />
            <Presentacion
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
    )
}


export default Home