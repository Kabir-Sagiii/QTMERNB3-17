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
function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/electronics"} element={<Electronics />} />
        <Route path={"/jewelery"} element={<Jewelery />} />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Woemns />} />
        <Route path={"/cart"} element={<Cart />} />
        {/* <Route
          path={"/productdetails/:id/:price"}
          element={<ProductDetails />}
        /> */}
        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
