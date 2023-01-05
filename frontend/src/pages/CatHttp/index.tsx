import React, { useState } from "react";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import "./styles.css";
function CatHttp() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [catImage, setCatImage] = useState("");

  const handelStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleCatImage = () => {
    if (status !== "") {
      setIsLoading(true);
      setCatImage(`https://http.cat/${status}`);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section id="geral">
        <div className="container">
          <section>
            <div className="widget">
              <div className="widget_title">
                <div className="widget_title_text">Cats</div>
                <div className="widget_title_bar"></div>
              </div>
              <div className="widget_body flex">
                <article>
                  {isLoading ? (
                    <>Carregando...</>
                  ) : (
                    catImage && (
                      <div className="cat_thumb">
                        <img src={catImage} />
                      </div>
                    )
                  )}
                </article>
              </div>
            </div>
          </section>
          <SideMenu
            filter={
              <>
                <div className="searchArea">
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
            }
          />
        </div>
      </section>
    </>
  );
}
export { CatHttp };
