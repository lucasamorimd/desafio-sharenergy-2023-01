import "./App.css";
import { RoutesList } from "./routes/RoutesList";
import { RoutesClientList } from "./routes/RoutesClientList";

function App() {
  return (
    <div className="p-4">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        <RoutesList />
        <RoutesClientList />
      </div>
      <footer>teste</footer>
    </div>
  );
}

export default App;
