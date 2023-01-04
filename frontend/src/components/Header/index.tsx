import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  console.log(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    }
  }, []);

  const showMenu = () => {
    if (isMobile) {
      setMobileMenuActive(!mobileMenuActive);
    }
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#">Sharenergy</a>
        </div>
        <div className="menu">
          <nav>
            <div className="menu-mobile" onClick={showMenu}>
              <div className="mm_line"></div>
              <div className="mm_line"></div>
              <div className="mm_line"></div>
            </div>
            <ul
              id="menu"
              style={
                isMobile ? { display: mobileMenuActive ? "flex" : "none" } : {}
              }
            >
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    showMenu();
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cat-http"
                  onClick={() => {
                    showMenu();
                  }}
                >
                  Cats
                </Link>
              </li>
              <li>
                <Link
                  to="/random-dogs"
                  onClick={() => {
                    showMenu();
                  }}
                >
                  Dogs
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  onClick={() => {
                    showMenu();
                  }}
                >
                  Clientes
                </Link>
              </li>
              <li>
                <Link to="#">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export { Header };
