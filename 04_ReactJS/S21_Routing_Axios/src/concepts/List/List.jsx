import React from "react";

function List() {
  // var data = 100; //number

  // var data = "Hyderabad"; //string

  // var data = true; //boolean

  // var data = { name: "Sagar" }; //object

  var data = [10, 20, 30, 40]; //array

  return (
    <div style={{ padding: "100px" }}>
      <h2>List in React :{data}</h2>
      <p>Para : {["Quality", "Thought"]}</p>
    </div>
  );
}

export default List;
