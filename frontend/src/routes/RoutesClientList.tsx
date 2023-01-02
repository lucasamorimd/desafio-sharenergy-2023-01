import { Route, Routes } from "react-router-dom";
import { ClientCreate } from "../pages/Clients/ClientCreate";
import { ClientDetail } from "../pages/Clients/ClientDetail";
import { Clients } from "../pages/Clients/Clients";
import { ClientUpdate } from "../pages/Clients/ClientUpdate";

function RoutesClientList(): JSX.Element {
  return (
    <Routes>
      <Route path="/clients" element={<Clients />} />
      <Route path="/client/create" element={<ClientCreate />} />
      <Route path="/client/update" element={<ClientUpdate />} />
      <Route path="/client/detail/:id" element={<ClientDetail />} />
    </Routes>
  );
}
export { RoutesClientList };
