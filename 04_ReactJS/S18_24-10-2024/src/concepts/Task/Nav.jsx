import { useContext } from "react";
import "./Nav.css";
import AuthContext from "./Context";
function Nav() {
  let logout = useContext(AuthContext);
  return (
    <div className="navContainer">
      <div className="left">
        <h2>Brand Logo</h2>
      </div>
      <div className="right">
        <a href="">Home</a>
        <a href="">Electronics</a>
        <a href="">Jewelery</a>
        <a href="">Mens</a>
        <a href="">Womens</a>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
