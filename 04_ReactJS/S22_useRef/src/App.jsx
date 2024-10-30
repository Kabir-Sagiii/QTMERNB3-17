import "./App.css";

import Nav from "./concepts/Task/Nav";
import Electronics from "./pages/electronics/Electronics";
import Jewelery from "./pages/jewelery/Jewelery";
import Mens from "./pages/mens/Mens";
import Woemns from "./pages/womens/Woemns";
import Home from "./concepts/Task/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details/PRoductDetails";
import Cart from "./pages/cart/Cart";
import UseRef from "./concepts/use-ref/UseRef";
import RefDom from "./concepts/use-ref/RefDom";
function App() {
  return (
    <div className="">
      <Nav />
      <RefDom />
      <UseRef />
    </div>
  );
}

export default App;
