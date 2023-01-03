import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../services/Axios/Factory";

function CatHttp() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusUrl, setStatusUrl] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setStatusUrl(`https://http.cat/${status}`);
    setLoading(false);
  };

  const handleInputStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <h1>Cat Http</h1>
      <div>
        <div className="searchArea">
          <div className="inputArea">
            <input type="number" value={status} onChange={handleInputStatus} />
          </div>
        </div>
        <div className="inputArea">
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>
      {loading && <div>Carregando imagem...</div>}
      {statusUrl && (
        <div className="imgArea">
          <img src={statusUrl} alt="Insira um número para buscar um status" />
        </div>
      )}
    </div>
  );
}
export { CatHttp };
