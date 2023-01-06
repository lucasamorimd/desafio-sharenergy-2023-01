import { Navigate } from "react-router-dom";

type RequireauthType = {
  children: JSX.Element;
};
function RequireAuth({ children }: RequireauthType) {
  const user = sessionStorage.getItem("user") || localStorage.getItem("user");

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
}
export { RequireAuth };
