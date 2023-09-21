import React from "react";
// Css
import "./QuienesSomos.css";
// Componentes
import Cards from "../../components/Cards";
import imgQuienesSomos from "../../imagenes/presentacion-image.jpg";
import Miembros from "./Miembros";

function QuienesSomos() {
    return (
        <div>
            <section className="container bg-light">
                <div className="quienesSomos m-0 text-center pt-4 pb-4">
                    {/* Quienes Somos */}
                    <div>
                        <h2 className="fs-1"> ¿Quienes somos?</h2>
                        <p className="fs-4">
                            En <strong>LibreAndo</strong>, nos enorgullece ser
                            un referente en la comunidad cuando se trata de
                            brindar apoyo y bienestar a través de nuestros
                            talleres y servicios terapéuticos. Fundada con una
                            visión de transformar vidas y promover el
                            crecimiento personal, nuestra institución se ha
                            convertido en un faro de esperanza y positividad
                            para quienes buscan alcanzar su máximo potencial.
                        </p>
                    </div>
                </div>
                {/* Nuestra mision */}
                <Cards
                    classNameImagenCard={"order-1"}
                    imgCard={imgQuienesSomos}
                    altImagenCard={"Imagen de Presentación"}
                    tituloCard={"Nuestra Misión"}
                    classNameDescripcionCard={"order-2"}
                    textoDescripcionCard={
                        "En LibreAndo, ofrecemos una amplia gama de talleres y servicios terapéuticos diseñados para abordar diversas necesidades y desafíos. Ya sea que estés buscando mejorar tus habilidades de afrontamiento, fortalecer tus relaciones interpersonales o explorar tu bienestar emocional, nuestro equipo terapéutico altamente calificado está aquí para guiarte en cada paso del camino."
                    }
                />

                <Cards
                    classNameImagenCard={"order-2"}
                    imgCard={imgQuienesSomos}
                    altImagenCard={"Imagen de Presentación"}
                    tituloCard={"Nuestro Equipo Terapéutico"}
                    classNameDescripcionCard={"order-1"}
                    textoDescripcionCard={
                        "Contamos con un equipo de profesionales dedicados y apasionados que están comprometidos con tu bienestar. Cada miembro de nuestro equipo posee una amplia experiencia y conocimientos en su campo, y trabaja de manera colaborativa para brindarte el apoyo que necesitas. En LibreAndo, creemos en la fuerza de la comunidad y en la capacidad de cada individuo para transformar sus vidas."
                    }
                />
            </section>
            <Miembros />
        </div>
    );
}

export default QuienesSomos;
