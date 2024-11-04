import "./Nav.css";

import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navContainer">
      <div className="left">
        <h2>Brand Logo</h2>
      </div>
      <div className="center">
        <Link to="/">Home</Link>

        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
      </div>
      <div className="right">
        <Link to="/profile">Profile</Link>
        <Link to="/cart">Cart</Link>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
