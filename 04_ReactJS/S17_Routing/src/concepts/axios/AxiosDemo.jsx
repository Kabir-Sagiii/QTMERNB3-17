// import { useState } from "react";
// import axios from "axios";
// import "./AxiosDemo.css";

// function AxiosDemo() {
//   const [state, setState] = useState([]);
//   const sendRequest = () => {
//     //Write Logic to send a Get Request
//     var promiseObj = axios.get("https://fakestoreapi.com/products");
//     promiseObj
//       .then((res) => {
//         setState(res.data);
//       })
//       .catch((error) => {
//         console.log("catch is executed");
//         console.log(error);
//       });
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <h2>Axios First Example</h2>
//       <br />

//       <button onClick={sendRequest}>Send Request</button>

//       <div className="tableContainer">
//         {state.length > 0 && (
//           <table width={"100%"} rules="all" cellPadding={20}>
//             <thead>
//               <tr>
//                 <th>IMAGE</th>
//                 <th>TITLE</th>
//                 <th>PRICE</th>
//                 <th>RATING</th>
//               </tr>
//             </thead>
//             <tbody align="center">
//               {state.map((product) => {
//                 return (
//                   <tr>
//                     <td>
//                       <img
//                         src={product.image}
//                         width={70}
//                         height={70}
//                         alt="product-image"
//                       />
//                     </td>
//                     <td>{product.title}</td>
//                     <td>${product.price}</td>
//                     <td>{product.rating.rate}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AxiosDemo;
import { useState } from "react";
import axios from "axios";
import "./AxiosDemo.css";

function AxiosDemo() {
  const [state, setState] = useState([]);
  const sendRequest = () => {
    //Write Logic to send a Get Request
    var promiseObj = axios.get("https://fakestoreapi.com/products");
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
      <h2>Products Information</h2>
      <br />
      <div className="bgImage"></div>
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
        Get All Products
      </button>

      <div className="cardContainer">
        {state.map((product) => {
          return (
            <div className="card">
              <img src={product.image} width={"100%"} height={200} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button>Product Details</button>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AxiosDemo;
