import "./styles.css";
import { useState } from "react";
import { LoginActions } from "./actions";
import { Navigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember_me, setRememberMe] = useState(false);
  const actions = new LoginActions();

  if (actions.verifyIsRemember()) {
    return <Navigate to="/" />;
  }

  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response = await actions.authenticate({ email, password, remember_me });
    if (response) {
      return <Navigate to="/" />;
    }
  };

  const handleSetRememberMe = () => {
    setRememberMe(!remember_me);
  };

  return (
    <div className="loginArea">
      <div className="container_login">
        <div className="login_title">Login</div>
        <form onSubmit={handleSubmit} className="form_login">
          <div className="inputArea">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={handleSetEmail}
            />
          </div>
          <div className="inputArea">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={handleSetPassword}
            />
          </div>
          <div className="buttonArea">
            <button>Logar</button>
          </div>
          <div className="checkArea">
            <input
              type="checkbox"
              checked={remember_me}
              onClick={handleSetRememberMe}
            />
            <label htmlFor="remember_me">Lembrar login?</label>
          </div>
        </form>
      </div>
    </div>
  );
}
export { Login };
