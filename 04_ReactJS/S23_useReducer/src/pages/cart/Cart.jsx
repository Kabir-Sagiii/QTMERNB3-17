import { useEffect, useState } from "react";
import axios from "axios";
function Cart() {
  let [carts, setCarts] = useState([]);
  useEffect(() => {
    getCartInfo();
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3000/addToCart/${id}`)
      .then(() => {
        getCartInfo();
      })
      .catch(() => {
        alert("Failed to  Removed Product from Cart ");
      });
  };

  const getCartInfo = () => {
    axios
      .get("http://localhost:3000/addToCart")
      .then((res) => {
        // console.log(res.data);
        setCarts(res.data);
      })
      .catch((error) => {
        alert("Failed to access Cart Information");
      });
  };
  return (
    <div>
      {carts.length > 0 && (
        <h1 style={{ textAlign: "center", margin: "50px", color: "red" }}>
          Cart Products Information
        </h1>
      )}
      {carts.length > 0 ? (
        <div style={{ width: "900px", margin: "50px 10px" }}>
          <table rules="rows">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody align="center">
              {carts.map((cartProduct) => {
                return (
                  <tr key={cartProduct.id}>
                    <td>
                      <img src={cartProduct.image} width={75} height={75} />
                    </td>
                    <td>{cartProduct.title}</td>
                    <td>${cartProduct.price}</td>
                    <td>- 1 +</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteProduct(cartProduct.id);
                        }}
                        style={{
                          border: "2px solid red",
                          padding: "7px 30px",
                          color: "red",
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          {" "}
          <h2
            style={{
              color: "red",
              margin: "100px 0px",
              fontSize: "52px",
              textAlign: "center",
            }}
          >
            No Products in the Cart
          </h2>{" "}
        </div>
      )}
    </div>
  );
}

export default Cart;
