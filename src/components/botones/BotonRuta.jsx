import { Link } from "react-router-dom";

const handleLinkClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function BotonRuta(props) {
  return (
    <>
      <Link to={props.btnRuta} onClick={handleLinkClick}>
        <button className="button learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">{props.btnTexto}</span>
        </button>
      </Link>
    </>
  );
}
