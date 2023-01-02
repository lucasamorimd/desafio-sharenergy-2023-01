import "./App.css";
import { RoutesList } from "./routes/RoutesList";
import { RoutesClientList } from "./routes/RoutesClientList";

function App() {
  return (
    <div className="">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div className="">
        <RoutesList />
        <RoutesClientList />
      </div>
      <footer>teste</footer>
    </div>
  );
}

export default App;
