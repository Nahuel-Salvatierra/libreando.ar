import React from "react";
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
          tituloPregunta:
            "Diagnósticos y Comprensión de Necesidades Específicas",
          descripcionRespuesta:
            "Nuestro equipo de profesionales está capacitado para brindar diagnósticos precisos y comprensivos que ayuden a identificar las necesidades individuales de cada niño/a. Nos enfocamos en comprender sus fortalezas y desafíos, lo que nos permite diseñar planes de intervención adaptados a sus requerimientos únicos.",
        },
        {
          tituloPregunta: "Trabajos sobre Límites",
          descripcionRespuesta:
            " La crianza con límites claros y saludables es fundamental para el desarrollo emocional y social de los niños/as. Nuestros especialistas trabajan con los padres para establecer estrategias efectivas de limitación y promover una disciplina positiva, respetuosa y consistente. Crianza Responsable y Comportamiento Disruptivo: Nuestra orientación a padres incluye asesoramiento sobre cómo afrontar y manejar comportamientos disruptivos en los niños/as. Brindamos técnicas y enfoques probados para abordar desafíos conductuales y promover una crianza responsable que fomente el bienestar y la conexión emocional.",
        },
        {
          tituloPregunta: "Certificado Único de Discapacidad",
          descripcionRespuesta:
            "Si tu hijo/a presenta alguna discapacidad, te acompañamos en el proceso de obtención del Certificado Único de Discapacidad (CUD), proporcionando la orientación y el asesoramiento necesario para acceder a los beneficios y recursos disponibles. Nuestra orientación a padres busca fortalecer la relación con tus hijos/as y empoderarte con las herramientas necesarias para criar de manera responsable y amorosa. Si necesitas apoyo en alguna de estas áreas o tienes dudas adicionales, no dudes en comunicarte con nuestro equipo. Estamos aquí para acompañarte en esta hermosa travesía de la crianza.",
        },
      ],
      mostrarBotonVerMas: false,
      classContenedorButton: "p-4",
      classButtonAcordeon: "p-2",
    },
    {
      tituloAcordeones: "Evaluación neurocognitiva",
      textoOpcional:'Nuestra evaluación neurocognitiva, basada en pruebas como el WISC-V, brinda diagnósticos precisos que destacan fortalezas y áreas de mejora en el funcionamiento intelectual. Estos resultados informados guían nuestras recomendaciones para impulsar el desarrollo cognitivo y el crecimiento personal en ámbitos educativos, sociales y emocionales',
      classTextoOpcional: "p-4",
      classDNoneAcordeon: "d-block",
      PregRta: [
        {
          tituloPregunta: "¿Qué ofrece nuestra Evaluación cognitiva?",
          descripcionRespuesta:
            "Nuestra evaluación neurocognitiva ofrece un enfoque integral para comprender la capacidad intelectual de los individuos a través de pruebas como el WISC-V (Escala de Inteligencia de Wechsler para Niños). Mediante esta evaluación, obtenemos un diagnóstico preciso que nos permite identificar las fortalezas y áreas de mejora en el funcionamiento neurocognitivo de cada persona. Con resultados detallados, brindamos orientación y recomendaciones para promover un desarrollo cognitivo óptimo y apoyar el crecimiento personal en el ámbito educativo, social y emocional.",
        },
      ],
    },
  ];

  return (
    <div>
      <section className="">
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
