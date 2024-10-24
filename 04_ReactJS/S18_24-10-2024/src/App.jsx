import "./App.css";

import Nav from "./concepts/Task/Nav";
import Electronics from "./pages/electronics/Electronics";
import Jewelery from "./pages/jewelery/Jewelery";
import Mens from "./pages/mens/Mens";
import Woemns from "./pages/womens/Woemns";
function App() {
  return (
    <div className="">
      <Nav />
      <Electronics />
      <hr />
      <Jewelery />
      <hr />
      <Mens />
      <hr />
      <Woemns />
    </div>
  );
}

export default App;
