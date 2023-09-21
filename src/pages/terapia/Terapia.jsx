import React from "react";
import Acordeon from "../../components/acordeon/Acordeon";
import ImgenTerapias from "./../../imagenes/taller/WhatsApp Image 2023-09-06 at 5.45.36 PM.jpeg";
function Terapia() {
    const acordeonData = [
        {
            tituloAcordeones: "Terapias",
            PregRta: [
                {
                    tituloPregunta: "Psicología",
                    descripcionRespuesta:
                        "En nuestra práctica de psicología, nos dedicamos a proporcionar atención clínica y acompañamiento terapéutico para niños, niñas y adultos. Nuestro equipo de psicólogos altamente capacitados está comprometido a brindarte un espacio seguro y confidencial para abordar desafíos emocionales y mentales. Utilizamos enfoques psicoanalíticos y cognitivo-conductuales para ayudarte a comprender tus pensamientos, emociones y comportamientos, y así encontrar soluciones efectivas. Si estás buscando mejorar tu bienestar emocional y alcanzar un mayor equilibrio en tu vida, estaremos encantados de acompañarte en este proceso de autodescubrimiento y crecimiento personal. En Nuestra Práctica de Psicología, estamos comprometidos a brindarte el apoyo que necesitas para vivir una vida más plena y satisfactoria. No dudes en contactarnos para programar una cita y comenzar tu camino hacia el bienestar emocional.",
                },
                {
                    tituloPregunta: "Psicopedagogía",
                    descripcionRespuesta:
                        "En nuestro centro de Psicopedagogía, estamos dedicados a potenciar el aprendizaje de niños, niñas y adolescentes. Nuestro equipo de especialistas está comprometido a identificar y abordar las dificultades escolares, ofreciendo técnicas de estudio efectivas y personalizadas. Evaluamos las necesidades únicas de cada estudiante y proporcionamos estrategias para superar obstáculos y alcanzar un máximo rendimiento académico. Si buscas apoyo para mejorar el proceso educativo de tu hijo/a, contáctanos y estaremos encantados de ayudarte en este importante camino hacia el éxito académico y personal.",
                },
                {
                    tituloPregunta: "Terapia Ocupacional",
                    descripcionRespuesta:
                        "Nuestra Terapia Ocupacional está diseñada para fortalecer la autonomía y habilidades de las personas de todas las edades. Nuestro equipo de terapeutas altamente capacitados se dedica a ayudar a los individuos a desarrollar y mejorar sus habilidades prácticas y sociales para una vida más independiente y plena. Nos enfocamos en la vinculación con el entorno, fomentando una mayor conexión con los demás y promoviendo la participación activa en actividades significativas. Si estás buscando mejorar tu calidad de vida y alcanzar un mayor nivel de funcionalidad, ¡nuestra Terapia Ocupacional te brindará el apoyo y las herramientas necesarias para lograrlo!",
                },
                {
                    tituloPregunta: "Estimulación Temprana",
                    descripcionRespuesta:
                        "Nuestra Estimulación Temprana se centra en el desarrollo cognitivo y motor de los niños y niñas en sus primeras etapas de vida. Nuestro equipo de especialistas en estimulación temprana está dedicado a ofrecer actividades y ejercicios diseñados para potenciar el crecimiento intelectual y físico de los más pequeños. Mediante juegos y ejercicios adecuados a su edad, fomentamos la adquisición de habilidades cognitivas y motoras fundamentales para su desarrollo. Si buscas promover un inicio sólido en la vida de tu hijo/a, nuestro programa de Estimulación Temprana les proporcionará las bases necesarias para un crecimiento saludable y exitoso.",
                },
            ],
        },
    ];

    return (
        <div>
            <section className="bg-body-tertiary">
                <div className="row p-5 text-center text-xl-start align-items-center justify-content-sm-center">
                <img
                    className="col-md-4 col-sm-8 col-xl-3 p-4 rounded-circle"
                    src={ImgenTerapias}
                    alt=""
                />
                    <div className="col-12 col-sm-8 justify-items-center">
                        <h1 className="text-body-emphasis">Tratamientos</h1>
                        <p className="fs-5 text-muted fs-xl-1">
                            En nuestra práctica de profesional, nos dedicamos a
                            proporcionar atención clínica y acompañamiento
                            terapéutico para niños, niñas, adolescentes y
                            adultos. Nuestro equipo de psicólogos altamente
                            capacitados utiliza enfoques psicoanalíticos y
                            cognitivo-conductuales para ayudarte a comprender
                            tus pensamientos, emociones y comportamientos, y así
                            encontrar soluciones efectivas.
                        </p>
                    </div>

                </div>
                
            </section>
            <section className="py-5">
                <div className="container px-5 my-5">
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

export default Terapia;
