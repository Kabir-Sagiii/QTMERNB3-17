import React from "react";

function ListItem() {
  var data = ["Apple", "Samsung", "Oppo", "vivo", "Iphone 16"];
  return (
    <div style={{ padding: "100px" }}>
      <h2>JSX Elements Based on Array</h2>
      {data.map(function (element) {
        return <p>{element}</p>;
      })}
    </div>
  );
}

// function ListItem() {
//   var data = ["Apple", "Samsung", "Oppo", "vivo", "Iphone 16"];
//   return (
//     <div style={{ padding: "100px" }}>
//       <h2>JSX Elements Based on Array</h2>
//       <p>{data[0]}</p>
//       <p>{data[1]}</p>
//       <p>{data[2]}</p>
//       <p>{data[3]}</p>
//       <p>{data[4]}</p>
//     </div>
//   );
// }

export default ListItem;
