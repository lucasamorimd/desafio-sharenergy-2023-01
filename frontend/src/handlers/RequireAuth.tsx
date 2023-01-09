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
  const user = sessionStorage.getItem("user") || localStorage.getItem("user");

  if (!token || !user) {
    return logout();
  }

  const classValidate = new ValidateToken();

  classValidate.validate(token, user);

  return children;
}
export { RequireAuth };
