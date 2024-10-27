import axios from "axios";

const addProductInCart = (data) => {
  axios
    .post("http://localhost:3000/addToCart", data)
    .then((res) => {
      alert("Product Added in the Cart");
    })
    .catch(() => {
      alert("Failed to add Product in Cart");
    });
};

export default addProductInCart;
