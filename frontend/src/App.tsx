import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/404";
import { CatHttp } from "./pages/CatHttp";
import { RandomDog } from "./pages/RandomDog";
import { Clients } from "./pages/Clients/Clients";
import { ClientCreate } from "./pages/Clients/ClientCreate";
import { ClientUpdate } from "./pages/Clients/ClientUpdate";
import { ClientDetail } from "./pages/Clients/ClientDetail";

function App() {
  return (
    <div className="p-4">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cat-http" element={<CatHttp />} />
          <Route path="/random-dog" element={<RandomDog />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client/create" element={<ClientCreate />} />
          <Route path="/client/update" element={<ClientUpdate />} />
          <Route path="/client/detail" element={<ClientDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer>teste</footer>
    </div>
  );
}

export default App;
