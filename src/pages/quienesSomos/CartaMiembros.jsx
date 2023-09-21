export default function CartaMiembros(prop) {
    return (
        <>
            <div className="col mb-5">
                <div className="text-center">
                    <img
                        className="img-fluid rounded-circle mb-4 p-4"
                        src={prop.imagen}
                        alt="..."
                    />
                    <h5 className="fw-bolder">{prop.nombre}</h5>
                    <div className="fst-italic text-muted">
                        {prop.titulo}
                    </div>
                </div>
            </div>
        </>
    );
}
