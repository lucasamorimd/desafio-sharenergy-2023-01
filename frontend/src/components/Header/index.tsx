import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/auth";
import "./styles.css";

type HeaderChildType = {
  children: JSX.Element | JSX.Element[];
  active: string;
};

function Header({ children, active = "home" }: HeaderChildType) {
  const { logout } = useContext(Context);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const handdleLogout = () => {
    logout();
  };

  return (
    <>
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
                  isMobile
                    ? { display: mobileMenuActive ? "flex" : "none" }
                    : {}
                }
              >
                <li className={active == "home" ? "active" : ""}>
                  <Link
                    to="/"
                    onClick={() => {
                      showMenu();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className={active == "cats" ? "active" : ""}>
                  <Link
                    to="/cat-http"
                    onClick={() => {
                      showMenu();
                    }}
                  >
                    Cats
                  </Link>
                </li>
                <li className={active == "dogs" ? "active" : ""}>
                  <Link
                    to="/random-dogs"
                    onClick={() => {
                      showMenu();
                    }}
                  >
                    Dogs
                  </Link>
                </li>
                <li className={active == "clients" ? "active" : ""}>
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
                  <Link to="/login" onClick={handdleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section id="geral">
        <div className="container">{children}</div>
      </section>
    </>
  );
}
export { Header };
