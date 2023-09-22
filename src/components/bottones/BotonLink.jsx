export default function BotonLink(props){
    return(
        <>
        <a href={props.link}>
          <button class="button learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">{props.texto}</span>
          </button>
        </a>
      </>
        )
}