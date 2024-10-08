import React from "react";
import E from "./E";
function D(props) {
  return (
    <div style={{ padding: "10px", margin: "10px 0px" }}>
      <h2>D Component</h2>
      <br />
      <hr />
      <E data={props.data} />
    </div>
  );
}

export default D;
