import React, { useEffect, useState } from "react";
import { axiosRequest } from "../services/Axios/Factory";

function CatHttp() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [statusUrl, setStatusUrl] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLButtonElement>) => {
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
      <input
        type="number"
        max={999}
        value={status}
        onChange={handleInputStatus}
      />
      <button onClick={handleSearch}>Buscar</button>
      {!loading && (
        <img src={statusUrl} alt="Insira um número para buscar um status"></img>
      )}
    </div>
  );
}
export { CatHttp };
