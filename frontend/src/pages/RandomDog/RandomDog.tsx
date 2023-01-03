import { useEffect, useState } from "react";
import { axiosRequest } from "../../services/Axios/Factory";
import "./RandomDog.css";

function RandomDog() {
  const [dog, setDog] = useState("");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    loadDog();
  }, []);

  const loadDog = async () => {
    setIsloading(true);
    const { data } = await axiosRequest.get(
      "https://random.dog/woof?include=jpg,gif"
    );
    const url = `https://random.dog/${data}`;
    setDog(url);
    setIsloading(false);
  };

  return (
    <div>
      <h1>
        Random Dog - <button onClick={loadDog}> Reload</button>
      </h1>
      {isloading ? (
        <div> carregando... </div>
      ) : (
        <div className="doggo">
          <img src={dog} />
        </div>
      )}
    </div>
  );
}
export { RandomDog };
