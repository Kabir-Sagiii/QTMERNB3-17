import "./App.css";
import { useState } from "react";
import Nav from "./concepts/Task/Nav";
import Wrapper from "./concepts/Task/Wrapper";
import AuthContext from "./concepts/Task/Context";
function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="">
      <AuthContext.Provider value={setIsLoggedIn}>
        {isLoggedIn && <Nav />}
        <Wrapper isLoggedIn={isLoggedIn} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
