import React from "react";

function E(props) {
  return (
    <div style={{ padding: "10px", margin: "10px 0px" }}>
      <h2>E Component</h2>
      <p>{props.data}</p>
    </div>
  );
}

export default E;
