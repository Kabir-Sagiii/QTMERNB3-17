import { useContext } from "react";
import AuthContext from "./Context";
function Login() {
  const login = useContext(AuthContext);
  return (
    <div className="loginContainer">
      <h2>Login Form</h2>
      <div>
        <input type="text" placeholder="username" />
      </div>

      <div>
        <input type="password" placeholder="password" />
      </div>

      <div>
        <input
          style={{ padding: "7px 30px" }}
          type="button"
          value="Login"
          placeholder="username"
          onClick={() => {
            login(true);
          }}
        />
      </div>
    </div>
  );
}

export default Login;
