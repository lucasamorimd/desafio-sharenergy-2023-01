import { Route, Routes } from "react-router-dom";
import { CatHttp } from "../pages/CatHttp";
import { Clients } from "../pages/Clients";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { RandomDogs } from "../pages/RandomDogs";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cat-http" element={<CatHttp />} />
      <Route path="/random-dogs" element={<RandomDogs />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export { RoutesList };
