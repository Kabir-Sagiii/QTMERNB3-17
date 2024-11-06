import "./App.css";

import Nav from "./components/Nav/Nav";
import Name from "./components/redux-components/Name";
import Details from "./components/redux-components/Details";
import Products from "./components/redux-components/Products";
function App() {
  return (
    <div className="">
      <Nav />
      <div style={{ padding: "100px" }}>
        <Name />
        <Products />
        <br />
        <hr />
        <br />
        <Details />
      </div>
    </div>
  );
}

export default App;
