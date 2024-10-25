import { useState } from "react";
import axios from "axios";
import "./AxiosDemo.css";
import { Link } from "react-router-dom";

function AxiosDemo({ url, mainTitle, bgImage }) {
  const [state, setState] = useState([]);
  const sendRequest = () => {
    var promiseObj = axios.get(url);
    promiseObj
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.log("catch is executed");
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "green" }}>{mainTitle} Information</h2>
      <br />
      <div className="bgImage" style={{ backgroundImage: bgImage }}></div>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas
        iusto quo non ipsam est molestiae suscipit in dignissimos sint
        exercitationem asperiores repudiandae, saepe modi excepturi. Aperiam
        facere expedita, error voluptas aliquam tenetur soluta! Qui, nesciunt
        sit incidunt tenetur consectetur, rerum commodi numquam obcaecati
        recusandae corrupti nam nobis dolorum ex nihil sapiente repellat rem,
      </p>
      <br />

      <button id="btn" onClick={sendRequest}>
        {mainTitle} Products
      </button>

      <div className="cardContainer">
        {state.map((product) => {
          return (
            <div className="card">
              <img src={product.image} width={"100%"} height={200} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <Link to="/productdetails">
                <button>Product Details</button>
              </Link>
              <button id="addtocart">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AxiosDemo;
