import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { CatHttp } from "../pages/CatHttp";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { RandomDog } from "../pages/RandomDog";

function RoutesList(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cat-http" element={<CatHttp />} />
      <Route path="/random-dog" element={<RandomDog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export { RoutesList };
