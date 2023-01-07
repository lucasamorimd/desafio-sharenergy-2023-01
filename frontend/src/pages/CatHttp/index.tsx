import React, { useState } from "react";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Widget } from "../../components/Widget";
import "./styles.css";
function CatHttp() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [catImage, setCatImage] = useState("");

  const handelStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleCatImage = () => {
    if (status !== "") {
      setCatImage(`https://http.cat/${status}`);
      setIsLoading(false);
    }
  };

  return (
    <Header active="cats">
      <section>
        <Widget title="Gatinhos HTTP">
          <article>
            <div className="cat_thumb">
              {isLoading ? (
                <>
                  <h1>Chame um gatinho</h1>
                  <p>Digite um status ali na barra de buscar</p>
                </>
              ) : (
                catImage && <img src={catImage} />
              )}
            </div>
          </article>
        </Widget>
      </section>
      <SideMenu title="Buscar">
        <>
          <div className="searchAreaCat">
            <input
              id="searchInput"
              type="text"
              maxLength={3}
              value={status}
              onChange={handelStatus}
              placeholder="Digite um status code"
            />
            <button onClick={handleCatImage}>Buscar</button>
          </div>
        </>
      </SideMenu>
    </Header>
  );
}
export { CatHttp };
