import "./App.css";
import { RoutesList } from "./routes/RoutesList";

import { BrowserRouter } from "react-router-dom";
import { SideMenu } from "./components/layout/SideMenu/SideMenu";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <SideMenu />
        <div className="content-container">
          <Header />
          <RoutesList />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
