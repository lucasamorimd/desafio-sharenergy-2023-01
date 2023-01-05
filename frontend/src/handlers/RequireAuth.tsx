import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../contexts/auth";

type RequireAuthType = {
  children: JSX.Element;
};
function RequireAuth({ children }: RequireAuthType) {
  const { state, dispatch } = useContext(Context);
  if (!state.auth.is_logged) {
    return <Navigate to="/login" />;
  }
  return children;
}
export { RequireAuth };
