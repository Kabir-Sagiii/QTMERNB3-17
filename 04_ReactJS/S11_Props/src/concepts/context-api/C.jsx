import React from "react";
import D from "./D";
function C(props) {
  return (
    <div style={{ padding: "10px", margin: "10px 0px" }}>
      <h2>C Component</h2>
      <br />
      <hr />
      <D data={props.info1} />
    </div>
  );
}

export default C;
