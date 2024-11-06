import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productsActionCreator } from "../../actioncreator/productsAction";
function Products() {
  let dispatch = useDispatch();

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        var actionObj = productsActionCreator(res.data);
        dispatch(actionObj);
      })
      .catch((error) => {
        alert("error while getting data");
      });
  };

  return (
    <div>
      <h2>Products Component</h2>
      <button onClick={getProducts}>Get Products</button>
    </div>
  );
}

export default Products;
