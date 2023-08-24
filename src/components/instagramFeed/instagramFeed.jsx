import db from "../../db_libreando.json";
import { useState, useEffect, React } from "react";
import env from "react-dotenv";

function Instagram() {
    // var url = "https://graph.instagram.com/me/media";
    // var fields = "?fields=media_type,media_url,caption,permalink&access_token=";
    // var access_token = import.meta.env.VITE_REACT_APP_INSTAGRAM_TOKEN
    // var urlFetch = url + fields + access_token;

    const [data, setData] = useState([]);
    useEffect(() => {
            setData(db.data);
    }, []);

    return (
        <div className="container">
            <a className="row gap-3 mt-3 justify-content-center" href="">
                {data.map((objeto) =>
                    objeto.media_type == "IMAGE" ||
                    objeto.media_type == "CAROUSEL_ALBUM" ? (
                        <div className="card col-3">
                            <img
                                src={objeto.media_url}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body row align-items-end">
                                <strong className="card-title">
                                    {objeto.nombre}
                                </strong>
                                <p className="card-text">
                                    Modelo: <br></br>
                                    {objeto.modelo}
                                </p>
                            </div>
                        </div>
                    ) : null
                )}
            </a>
        </div>
    );
}

export default Instagram;
