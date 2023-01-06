import { Navigate } from "react-router-dom";

type RequireAuthType = {
  children: JSX.Element;
};
function RequireAuth({ children }: RequireAuthType) {
  const user = sessionStorage.getItem("user") || localStorage.getItem("user");

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
}
export { RequireAuth };
