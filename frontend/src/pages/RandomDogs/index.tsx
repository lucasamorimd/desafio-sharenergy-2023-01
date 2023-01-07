import { useEffect, useState } from "react";
import "./styles.css";
import { RandomDogsActions } from "./actions";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

function RandomDogs() {
  const [randomDog, setRandomDog] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const actions = new RandomDogsActions();
  useEffect(() => {
    loadDog();
  }, []);

  const loadDog = async () => {
    setIsLoading(true);
    let dog = await actions.getRandomDog("https://random.dog/woof");
    setRandomDog(`https://random.dog/${dog}`);
    setIsLoading(false);
  };

  const handleReload = () => {
    loadDog();
  };

  return (
    <>
      <Header />
      <section id="geral">
        <div className="container">
          <section>
            <div className="widget">
              <div className="widget_title">
                <div className="widget_title_text">Dogs</div>
                <div className="widget_title_bar"></div>
              </div>
              <div className="widget_body flex">
                <article>
                  <div className="dog_thumb">
                    {isLoading ? (
                      <>Carregando...</>
                    ) : (
                      randomDog && <img src={randomDog} />
                    )}
                  </div>
                </article>
              </div>
            </div>
          </section>
          <SideMenu>
            <div className="searchArea">
              <button onClick={handleReload}>Reload</button>
            </div>
          </SideMenu>
        </div>
      </section>
    </>
  );
}
export { RandomDogs };
