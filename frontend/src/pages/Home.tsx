import { useEffect, useState } from "react";
import { axiosRequest } from "../services/Axios/Factory";

function Home() {
  const [users, setUsers] = useState({});
  let teste = axiosRequest
    .get("https://randomuser.me/api/?results=3")
    .then((result) => {
      console.log(result.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div>
      <h1>Home</h1>
      <div>...</div>
    </div>
  );
}
export { Home };
