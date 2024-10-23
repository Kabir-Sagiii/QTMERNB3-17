import React from "react";
import axios from "axios";

function AxiosDemo() {
  const sendRequest = () => {
    //Write Logic to send a Get Request
    var promiseObj = axios.get("https://fakestoreapi.com/products");
    promiseObj
      .then((res) => {
        console.log("then is executed");
        console.log(res.data);
      })
      .catch((error) => {
        console.log("catch is executed");
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Axios First Example</h2>
      <br />

      <button onClick={sendRequest}>Send Request</button>
    </div>
  );
}

export default AxiosDemo;
