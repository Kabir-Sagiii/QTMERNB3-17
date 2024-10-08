import React from "react";
import C from "./C";
function B(props) {
  return (
    <div style={{ padding: "10px", margin: "10px 0px" }}>
      <h2>B Component</h2>
      <br />
      <hr />
      <C info={props.data} />
    </div>
  );
}

export default B;
