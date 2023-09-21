export default function Presentacion(props) {
    return (
        <>
            <section className="container">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6 ">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder mb-2">
                                ¡Bienvenidos a LibreAndo!
                            </h1>
                            <p className="lead fw-normal mb-4">
                                En LibreAndo, nuestro compromiso es brindar un
                                apoyo integral a las personas, fomentando el
                                bienestar emocional y el desarrollo de
                                habilidades en un ambiente cálido y ameno.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-xl-block col-10 pt-4 pb-4 ">
                        <img
                            className="rounded"
                            src={props.img}
                            alt="chicos sonriendo y el texto libreando"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
