import React from "react";
// Css
import "./Servicios.css"
// Componentes
import Acordeon from "../../components/acordeon/Acordeon";

function Servicio() {
  const acordeonData = [
    {
      tituloAcordeones: "Servicios",
      textoOpcional:
        "En nuestro centro, comprendemos los desafíos de la crianza y ofrecemos orientación a padres para brindar apoyo y herramientas. Nuestro equipo de profesionales ayuda con diagnósticos, comportamiento disruptivo, límites saludables y el bienestar de los hijos. Juntos construimos un ambiente familiar armonioso para el desarrollo de cada niño/a",
      classTextoOpcional: "p-4",
      classDNoneAcordeon: "d-block",
      PregRta: [
        {
          tituloPregunta: "Evaluación Neurocognitiva",
          descripcionRespuesta:
            " La evaluación neurocognitiva es un proceso evaluativo destinado a personas de todas las edades. A partir de la implementación de una batería de instrumentos diagnósticos, podemos brindar diagnósticos precisos que destacan fortalezas y áreas de mejora en el funcionamiento neurocognitivo de cada persona. Los resultados obtenidos guían nuestras recomendaciones para impulsar el desarrollo cognitivo y el crecimiento personal en ámbitos educativos, sociales y emocionales. No dudes en contactarnos para solicitar tu turno para comenzar con este proceso.",
        },
        
        {
          tituloPregunta:
            "Orientación a Padres y Madres",
          descripcionRespuesta:
            "En Libre ando comprendemos los desafíos diarios de la crianza de niños y niñas. Problemáticas tales como comportamiento disruptivo, falta de límites saludables o dificultades en la comunicación familiar son algunos de los tantos motivos para realizar una consulta. Ofrecemos espacios de orientación a padres para acompañar en la implementación de recursos y herramientas destinadas al abordaje específico de las dificultades presentes en el ámbito hogareño y social. Contactanos para solicitar un turno y comenzar a acompañarte en la construcción de un ambiente familiar armonioso para el desarrollo saludable de tu hijo o hija.",
        },
    
        {
          tituloPregunta: "Diagnósticos y Certificado Único de Discapacidad",
          descripcionRespuesta:
            "Nuestro equipo ofrece acompañamiento personalizado para la evaluación de las necesidades y dificultades neurocognitivas de tu hijo/a. En caso de arribar a un diagnóstico que implique la necesidad de apoyos y dispositivos específicos para acompañar su trayectoria vital, te brindaremos la asistencia necesaria para la obtención del Certificado Único de Discapacidad (CUD). Te proporcionamos la orientación necesaria para acceder a los beneficios y recursos disponibles. El diagnóstico es el primer paso para el abordaje y la implementación de las herramientas indispensables para el desarrollo de tu hijo/a. No dudes en consultarnos, estamos para acompañarte en este proceso.",
        },
      ],
      mostrarBotonVerMas: false,
      classContenedorButton: "p-4",
      classButtonAcordeon: "p-2",
    },
  ];

  return (
    <div>
      <section className="servicios-acordeon">
        <div className="container px-5 my-5">
          <div>
            {/* Acordeones */}
            {acordeonData.map((acordeon, index) => (
              <Acordeon
                key={index}
                tituloAcordeones={acordeon.tituloAcordeones}
                PregRta={acordeon.PregRta}
                textoOpcional={acordeon.textoOpcional}
                classDNoneAcordeon={acordeon.classDNoneAcordeon}
                classTextoOpcional={acordeon.classTextoOpcional}
                mostrarBotonVerMas={acordeon.mostrarBotonVerMas}
                classContenedorButton={acordeon.classContenedorButton}
                classButtonAcordeon={acordeon.classButtonAcordeon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicio;
