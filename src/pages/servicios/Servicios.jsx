import React from 'react'
import Acordeon from '../../components/acordeon/Acordeon';

function Servicio() {
    const acordeonData = [
        {
            tituloAcordeones: "Terapias",
            textoOpcional: "En nuestro centro, comprendemos que la crianza de los hijos puede presentar desafíos únicos. Es por eso que ofrecemos servicios de orientación a padres para brindarles el apoyo y las herramientas necesarias en esta importante etapa de la vida. Nuestro equipo de profesionales altamente capacitados está comprometido a guiar a los padres en temas como el diagnóstico y comprensión de necesidades específicas, tales como el comportamiento disruptivo o el certificado único de discapacidad. También abordamos el tema de los límites en la crianza, proporcionando estrategias efectivas para establecer límites saludables y promover una crianza responsable. Nuestra orientación a padres se centra en el crecimiento responsable y el bienestar de los hijos, para que juntos podamos construir un ambiente familiar armonioso y propicio para el desarrollo integral de cada niño/a.",
            classTextoOpcional: "p-3",
            classDNoneAcordeon: "d-none",
            PregRta: [
                { tituloPregunta: "Diagnósticos y Comprensión de Necesidades Específicas", descripcionRespuesta: "Nuestro equipo de profesionales está capacitado para brindar diagnósticos precisos y comprensivos que ayuden a identificar las necesidades individuales de cada niño/a. Nos enfocamos en comprender sus fortalezas y desafíos, lo que nos permite diseñar planes de intervención adaptados a sus requerimientos únicos." },
                { tituloPregunta: "Trabajos sobre Límites", descripcionRespuesta: " La crianza con límites claros y saludables es fundamental para el desarrollo emocional y social de los niños/as. Nuestros especialistas trabajan con los padres para establecer estrategias efectivas de limitación y promover una disciplina positiva, respetuosa y consistente. Crianza Responsable y Comportamiento Disruptivo: Nuestra orientación a padres incluye asesoramiento sobre cómo afrontar y manejar comportamientos disruptivos en los niños/as. Brindamos técnicas y enfoques probados para abordar desafíos conductuales y promover una crianza responsable que fomente el bienestar y la conexión emocional." },
                { tituloPregunta: "Certificado Único de Discapacidad:", descripcionRespuesta: "Si tu hijo/a presenta alguna discapacidad, te acompañamos en el proceso de obtención del Certificado Único de Discapacidad (CUD), proporcionando la orientación y el asesoramiento necesario para acceder a los beneficios y recursos disponibles. Nuestra orientación a padres busca fortalecer la relación con tus hijos/as y empoderarte con las herramientas necesarias para criar de manera responsable y amorosa. Si necesitas apoyo en alguna de estas áreas o tienes dudas adicionales, no dudes en comunicarte con nuestro equipo. Estamos aquí para acompañarte en esta hermosa travesía de la crianza." },
            ],
            mostrarBotonVerMas: true,
            classContenedorButton: "p-3",
            classButtonAcordeon: "p-2",
        },
        {
            tituloAcordeones: "Terapias",
            PregRta: [
                { tituloPregunta: "Psicología", descripcionRespuesta: "En nuestra práctica de psicología, nos dedicamos a proporcionar atención clínica y acompañamiento terapéutico para niños, niñas y adultos. Nuestro equipo de psicólogos altamente capacitados está comprometido a brindarte un espacio seguro y confidencial para abordar desafíos emocionales y mentales. Utilizamos enfoques psicoanalíticos y cognitivo-conductuales para ayudarte a comprender tus pensamientos, emociones y comportamientos, y así encontrar soluciones efectivas. Si estás buscando mejorar tu bienestar emocional y alcanzar un mayor equilibrio en tu vida, estaremos encantados de acompañarte en este proceso de autodescubrimiento y crecimiento personal. En Nuestra Práctica de Psicología, estamos comprometidos a brindarte el apoyo que necesitas para vivir una vida más plena y satisfactoria. No dudes en contactarnos para programar una cita y comenzar tu camino hacia el bienestar emocional." },
            ],
        },
    ];

    return (
        <div>
            <section className="py-5">
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

export default Servicio