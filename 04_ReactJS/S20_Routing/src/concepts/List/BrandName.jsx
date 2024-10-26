import React from "react";

// function BrandName() {
//   var brandnames = ["Apple", "Samsung", "Oneplus", "Vivo"];
//   return (
//     <div style={{ padding: "100px" }}>
//       <h2>Display All Brand Names in Ordered Format</h2>
//       <ol>
//         <li>{brandnames[0]}</li>
//         <li>{brandnames[1]}</li>
//         <li>{brandnames[2]}</li>
//         <li>{brandnames[3]}</li>
//       </ol>
//     </div>
//   );
// }

function BrandName() {
  var names = [<h3>1</h3>, <h3>2</h3>, <h3>3</h3>];
  var brandnames = [<li>Apple</li>, <li>Oneplus</li>, <li>Samsung</li>];
  return (
    <div style={{ padding: "100px" }}>
      <h2>Display All Brand Names in Ordered Format</h2>
      <ol>{brandnames}</ol>
      <div>{names}</div>
    </div>
  );
}

export default BrandName;
