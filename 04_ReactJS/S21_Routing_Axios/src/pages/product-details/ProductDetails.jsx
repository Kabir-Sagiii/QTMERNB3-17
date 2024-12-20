import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import addProductInCart from "./PdService";
import axios from "axios";
function ProductDetails() {
  let { id } = useParams();
  const [state, setState] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    rating: { rate: 0, count: 0 },
    category: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        alert("Error while fetching the data");
      });
  }, []);
  return (
    <div className="pdContainer">
      <div className="leftPanel">
        <img src={state.image} width={"100%"} height={370} />
      </div>
      <div className="rightPanel">
        <h2>{state.title}</h2>
        <p>${state.price}</p>
        <p>{state.description}</p>
        <p>{state.rating.rate}</p>
        <div>
          <button
            onClick={() => {
              addProductInCart(state);
            }}
            id=""
            style={{ marginRight: "30px", padding: "8px 30px" }}
          >
            Add to Cart
          </button>
          <button id="category">Back to Category</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
