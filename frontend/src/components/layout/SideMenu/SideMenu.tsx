import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  return (
    <div className="sideMenuArea">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cat-http">
          <li>Cats</li>
        </Link>
        <Link to="/random-dog">
          <li>Dogs</li>
        </Link>
        <Link to="/clients">
          <li>Clientes</li>
        </Link>
      </ul>
    </div>
  );
}
export { SideMenu };
