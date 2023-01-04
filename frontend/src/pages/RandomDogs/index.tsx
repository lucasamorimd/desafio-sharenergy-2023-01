import { useEffect, useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { RandomDogsActions } from "./actions";
import "./styles.css";
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
      <SideMenu
        filter={
          <div className="searchArea">
            <button onClick={handleReload}>Reload</button>
          </div>
        }
      />
    </>
  );
}
export { RandomDogs };
