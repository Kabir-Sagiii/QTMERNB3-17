import React from "react";

function B(props) {
  return (
    <div>
      <h2>B Component</h2>
      <p style={{ color: "red", fontWeight: "bold" }}>{props.data}</p>
    </div>
  );
}

export default B;
