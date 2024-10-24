import React from "react";
import Login from "./Login";
import Home from "./Home";
function Wrapper({ isLoggedIn }) {
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Wrapper;
