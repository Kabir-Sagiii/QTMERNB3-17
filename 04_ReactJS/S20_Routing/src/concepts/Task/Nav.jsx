import { useContext } from "react";
import "./Nav.css";
import AuthContext from "./Context";
import { Link } from "react-router-dom";
function Nav() {
  let logout = useContext(AuthContext);
  return (
    <div className="navContainer">
      <div className="left">
        <h2>Brand Logo</h2>
      </div>
      <div className="right">
        <Link to="/">Home</Link>

        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
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
