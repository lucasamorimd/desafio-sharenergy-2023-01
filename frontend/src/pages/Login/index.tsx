import "./styles.css";
import { useState, useContext, useEffect } from "react";
import { LoginActions } from "./actions";
import { Context } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { state, dispatch } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember_me, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    authenticated();
  }, [state]);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [message]);

  const authenticated = () => {
    if (state.auth.isLogged) {
      console.log("veio aqui?");
      sessionStorage.setItem("user", JSON.stringify(state.auth));
      sessionStorage.setItem("token", state.auth.token);
      if (state.auth.rememberMe) {
        localStorage.setItem("user", JSON.stringify(state.auth));
        localStorage.setItem("token", state.auth.token);
      }
      navigate("/");
    }
  };

  const handleSetUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const actions = new LoginActions();
    let response = await actions.authenticate(userName, password);
    if (response.data == null) {
      setMessage(response.message);
      return;
    }
    dispatch({
      type: "CHANGE_USER_NAME",
      payload: { userName: response.data.userName },
    });
    dispatch({
      type: "CHANGE_USER_NICKNAME",
      payload: { userNickName: response.data.userNickName },
    });
    dispatch({
      type: "CHANGE_USER_EMAIL",
      payload: { userEmail: response.data.email },
    });
    dispatch({
      type: "CHANGE_TOKEN",
      payload: { token: response.data.token },
    });
    dispatch({
      type: "CHANGE_IS_LOGGED",
      payload: { isLogged: true },
    });
    dispatch({
      type: "CHANGE_REMEMBER_ME",
      payload: { rememberMe: remember_me },
    });
  };

  const handleSetRememberMe = () => {
    setRememberMe(!remember_me);
  };

  return (
    <div className="loginArea">
      <div className="container_login">
        <div className="login_title">Login</div>
        <form onSubmit={handleSubmit} className="form_login">
          <div className="messageArea">{message}</div>
          <div className="inputArea">
            <label htmlFor="UserName">User Name</label>
            <input
              required
              type="UserName"
              id="UserName"
              value={userName}
              onChange={handleSetUserName}
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
            <button type="submit">Logar</button>
          </div>
          <div className="checkArea">
            <input
              type="checkbox"
              checked={remember_me}
              onChange={handleSetRememberMe}
            />
            <label htmlFor="remember_me">Lembrar login?</label>
          </div>
        </form>
      </div>
    </div>
  );
}
export { Login };
