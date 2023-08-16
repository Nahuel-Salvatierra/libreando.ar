import React, { useEffect, useState } from "react";

export function Instagram() {
    var url = "https://graph.instagram.com/me/media";
    var fields = "?fields=media_type,media_url,caption,permalink&access_token=";
    var access_token = 'IGQWRNNmNXOUV2S1JSeEZAyYXZAiNDVlZA0ZAnenNEamw1LVcybFJaRE5OSTY2WDBVbVNEd3YzRmYyNWRHYUlpUDRUOURBeV9wQ0draExDNDlTR0hZAOS1TMkhDS05EaW1OT3BVMTJST184WlZAKSkxjZATk3TzcxZAHgwS2sZD'

    var urlFetch = url + fields + access_token;

    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(urlFetch);
              const responseData = await response.json()
              setData(responseData.data)
          } catch (error) {
              console.error(error);
          }
      };
  
      fetchData();
  }, []);
  
return (
  <a className="row gap-3 mt-3 justify-content-center" href="">
      {data.map((objeto) => (
          <div className="card col-xl-3 col-md-5">
              <img src={objeto.media_url} className="card-img-top" alt="..." />
              <div className="card-body row align-items-end">
                  <strong className="card-title">{objeto.nombre}</strong>
                  <p className="card-text">
                      Modelo: <br></br>
                      {objeto.modelo}
                  </p>
                  <div
                      href="#"
                      className="btn btn-primary espacio-lateral"
                  >
                      <i class="bi bi-cart3"></i>Añadir
                  </div>
              </div>
          </div>
      ))}
  </a>
);
}