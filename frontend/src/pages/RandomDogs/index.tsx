import { useEffect, useState } from "react";
import "./styles.css";
import { RandomDogsActions } from "./actions";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Widget } from "../../components/Widget";

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
      <Header active="dogs">
        <section>
          <Widget title="Doguinhos">
            <article>
              <div className="dog_thumb">
                {isLoading ? (
                  <>Carregando...</>
                ) : (
                  randomDog && <img src={randomDog} />
                )}
              </div>
            </article>
          </Widget>
        </section>
        <SideMenu title="Carregar Doguinho">
          <div className="reloadAreaDog">
            <button onClick={handleReload}>Reload</button>
          </div>
        </SideMenu>
      </Header>
    </>
  );
}
export { RandomDogs };
