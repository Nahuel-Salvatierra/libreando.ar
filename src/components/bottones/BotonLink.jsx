export default function BotonLink(props){
    return(
        <>
        <a href={props.link}>
          <button className="button learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">{props.texto}</span>
          </button>
        </a>
      </>
        )
}