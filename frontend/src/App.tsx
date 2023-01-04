import "./App.css";
import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import { RoutesList } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="geral">
        <div className="container">
          <RoutesList />
        </div>
      </section>
    </div>
  );
}

export default App;
