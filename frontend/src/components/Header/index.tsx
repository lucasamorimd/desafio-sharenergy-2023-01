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

  const showMenu = () => {
    let mobile_menu = document.getElementById("mobile_menu");
    if (mobile_menu) {
      switch (mobile_menu.style.display) {
        case "flex":
          mobile_menu.style.display = "none";
          break;
        default:
          mobile_menu.style.display = "flex";
      }
    }
  };

  const handdleLogout = () => {
    logout();
  };

  return (
    <>
      <header id="header">
        <div className="header_container">
          <div className="header_logo">
            <a href="#">Sharenergy</a>
          </div>
          <div className="header_menu">
            <nav>
              <div className="header_menu-mobile" onClick={showMenu}>
                <div className="header_mm_line"></div>
                <div className="header_mm_line"></div>
                <div className="header_mm_line"></div>
              </div>
              <ul id="menu">
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
              <ul id="mobile_menu">
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
        <div className="header_container">{children}</div>
      </section>
    </>
  );
}
export { Header };
