import db from "../../db_libreando.json";
import { useState, useEffect, React } from "react";

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
            <div className="row mt-3 justify-content-center" href="">
                {data.map((objeto) =>
                    objeto.media_type == "IMAGE" ||
                    objeto.media_type == "CAROUSEL_ALBUM" ? (
                        <div className="col-4 p-0 imgContainer">
                            <img
                                src={objeto.media_url}
                                className=""
                                alt="..."
                            />
                            <div className="title">
                                <p className="">{objeto.caption}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="col-4 p-0 videoContainer">
                            <video 
                                src={objeto.media_url}
                                className="object-fit-cover"
                                alt="..."
                            />
                            <div className="title">
                                <p className="">{objeto.caption}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Instagram;
