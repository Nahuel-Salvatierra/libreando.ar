import React from "react";
import Acordeon from "../../components/acordeon/Acordeon";
import ImgenTerapias from "../../imagenes/tratamientos/Index Tratamientos.jpg";
function Tratamientos() {
  const acordeonData = [
    {
      tituloAcordeones: "Terapias",
      PregRta: [
        {
          tituloPregunta: "Psicología",
          descripcionRespuesta: (
            <>
              En el espacio de Psicología orientamos nuestro abordaje al
              acompañamiento de las trayectorias individuales y personales.
              Brindamos atención clínica a niños/as, adolescentes y adultos/as y
              ofrecemos enfoques cognitivo-conductuales y psicodinámicos para
              ayudar a mejorar el bienestar emocional y alcanzar un mayor
              equilibrio y crecimiento personal. Nuestro equipo se compromete a
              brindar un espacio seguro y confidencial para abordar los
              distintos objetivos que se propongan. Contactanos para realizar
              una entrevista de admisión y comenzar un proceso terapéutico.
            </>
          ),
        },
        {
          tituloPregunta: "Psicopedagogía",
          descripcionRespuesta: (
            <>
              En nuestro equipo de Psicopedagogía nos encontramos especializados
              en el acompañamiento y fortalecimiento del desarrollo del
              aprendizaje en niños/as, adolescentes y adultos. Nos comprometemos
              a identificar y abordar las dificultades escolares y académicas
              que se presenten, ofreciendo herramientas específicas para superar
              los obstáculos y alcanzar un máximo rendimiento. Si buscas apoyo
              para mejorar el proceso educativo de tu hijo/a o te encontras con
              dificultades personales en tus procesos de aprendizaje, no dudes
              en solicitar una entrevista con el área de Psicopedagogía.
            </>
          ),
        },
        {
          tituloPregunta: "Terapia Ocupacional",
          descripcionRespuesta: (
            <>
              Desde el área de Terapia Ocupacional nos orientamos al diseño de
              estrategias y herramientas específicas para fortalecer la
              autonomía y habilidades de personas de todas las edades. Nuestro
              equipo de terapeutas se dedica a ayudar a los individuos a
              desarrollar y mejorar sus habilidades y prácticas sociales para
              generar las condiciones necesarias para llevar adelante una vida
              más independiente y plena. Las intervenciones se enfocan en la
              vinculación de las personas con su entorno, buscando fomentar una
              mayor conexión con los demás y promover la participación activa en
              actividades significativas. Contactanos para realizar una
              entrevista con nuestro equipo terapéutico y comenzar a desarrollar
              un programa de objetivos ajustados a tus necesidades o las de tu
              hijo/a.
            </>
          ),
        },
        {
          tituloPregunta: "Estimulación Temprana",
          descripcionRespuesta: (
            <>
              La Estimulación Temprana se enfoca en el desarrollo cognitivo y
              motor de los niños y niñas en sus primeras etapas de la vida.
              Nuestro equipo de profesionales se encuentra especializado en
              ofrecer estrategias, herramientas, actividades y ejercicios
              destinados a potenciar el crecimiento intelectual y físico de los
              más pequeños. Si buscas promover un inicio sólido en la vida de tu
              hijo o hija, nuestro equipo de Estimulación Temprana puede
              acompañarte en el proceso. Contactanos y solicitá una primera
              entrevista para comenzar a la brevedad.
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <section className="bg-body-tertiary">
        <div className="row pt-3 text-center text-xl-start align-items-center justify-content-sm-center">
          <img
            className="col-md-4 col-sm-8 col-xl-3 p-4 rounded-circle tratamientos"
            src={ImgenTerapias}
            alt="dos personas se sostienen de la mano"
          />
          <div className="col-12 col-sm-8 justify-items-center">
            <h1 className="text-body-emphasis">Tratamientos</h1>
            <p className="fs-5 text-muted fs-xl-1">
              En Libre Ando nos orientamos a la atención clínica y acompañamiento
              de niños/as, adolescentes y adultos/as. Nuestro equipo de
              profesionales ofrece diversos abordajes y especialidades para
              acompañar el desarrollo integral de cada persona de acuerdo a sus
              necesidades.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container px-5 py-5">
          <div>
            {/* Acordeones */}
            {acordeonData.map((acordeon, index) => (
              <Acordeon
                key={index}
                tituloAcordeones={acordeon.tituloAcordeones}
                PregRta={acordeon.PregRta}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tratamientos;
