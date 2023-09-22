import { Link } from "react-router-dom";

const handleLinkClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function BotonRuta(props) {
  return (
    <>
      <Link to={props.btnRuta} onClick={handleLinkClick}>
        <button class="button learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">{props.btnTexto}</span>
        </button>
      </Link>
    </>
  );
}
