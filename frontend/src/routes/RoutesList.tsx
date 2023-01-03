import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { CatHttp } from "../pages/CatHttp/CatHttp";
import { ClientCreate } from "../pages/Clients/ClientCreate";
import { ClientDetail } from "../pages/Clients/ClientDetail";
import { Clients } from "../pages/Clients/Clients";
import { ClientUpdate } from "../pages/Clients/ClientUpdate";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";
import { RandomDog } from "../pages/RandomDog/RandomDog";

function RoutesList(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="cat-http" element={<CatHttp />} />
      <Route path="random-dog" element={<RandomDog />} />
      <Route path="clients" element={<Clients />} />
      <Route path="client/create" element={<ClientCreate />} />
      <Route path="client/update" element={<ClientUpdate />} />
      <Route path="client/detail/:id" element={<ClientDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export { RoutesList };
