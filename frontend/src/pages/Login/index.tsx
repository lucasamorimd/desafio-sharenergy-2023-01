import "./styles.css";
function Login() {
  return (
    <div className="loginArea">
      <div className="container_login">
        <div className="login_title">Login</div>
        <form action="" className="form_login">
          <div className="inputArea">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="inputArea">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </div>
          <div className="buttonArea">
            <button>Logar</button>
          </div>
          <div className="checkArea">
            <input type="checkbox" />
            <label htmlFor="remember_me">Lembrar login?</label>
          </div>
        </form>
      </div>
    </div>
  );
}
export { Login };
