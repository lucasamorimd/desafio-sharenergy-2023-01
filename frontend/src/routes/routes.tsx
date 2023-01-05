import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../handlers/RequireAuth";
import { CatHttp } from "../pages/CatHttp";
import { Clients } from "../pages/Clients";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { RandomDogs } from "../pages/RandomDogs";

function RoutesList() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/cat-http"
        element={
          <RequireAuth>
            <CatHttp />
          </RequireAuth>
        }
      />
      <Route
        path="/random-dogs"
        element={
          <RequireAuth>
            <RandomDogs />
          </RequireAuth>
        }
      />
      <Route
        path="/clients"
        element={
          <RequireAuth>
            <Clients />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export { RoutesList };
