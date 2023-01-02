function Login() {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <form>
        <div className="inputArea">
          <label> Email: </label>
          <input type="email" />
        </div>
        <div className="inputArea">
          <label>Senha:</label>
          <input type="password" />
        </div>
        <div className="inputArea">
          <button>Logar</button>
        </div>
      </form>
    </div>
  );
}
export { Login };
