export default function CarouselX3(props) {
  return (
    <>
        <div id={`carouselExample${props.id}`} className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={props.imagenTallerUno} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={props.imagenTallerDos} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={props.imagenTallerTres} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carouselExample${props.id}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carouselExample${props.id}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>
  );
}
