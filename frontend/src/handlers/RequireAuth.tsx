import { Navigate } from "react-router-dom";
import { Context } from "../contexts/auth";
import { ValidateToken } from "./ValidateToken";
import { useContext } from "react";

type RequireauthType = {
  children: JSX.Element;
};
function RequireAuth({ children }: RequireauthType) {
  const { logout } = useContext(Context);
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (!token) {
    return logout();
  }

  const classValidate = new ValidateToken();

  classValidate.validate(token);

  return children;
}
export { RequireAuth };
