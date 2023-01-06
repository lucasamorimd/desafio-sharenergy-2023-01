import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../contexts/auth";
import { AuthDTO } from "../dto/AuthDTO";

function Authenticated(data: AuthDTO, remember_me: boolean) {
  const { state } = useContext(Context);

  sessionStorage.setItem("user", JSON.stringify(state));
  if (remember_me) {
    localStorage.setItem("user", JSON.stringify(state));
  }
  return <Navigate to="/" />;
}

export { Authenticated };
