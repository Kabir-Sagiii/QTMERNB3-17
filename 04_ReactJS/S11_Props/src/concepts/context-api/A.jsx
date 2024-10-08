import { useState } from "react";
import B from "./B";
function A() {
  const [state, setState] = useState("dummy Data");

  const SendData = () => {
    setState("New Data");
  };
  return (
    <div style={{ padding: "10px" }}>
      <h2>A Component</h2>
      <br />
      <button onClick={SendData}>Send Data</button>
      <br />
      <br />
      <hr />
      <B data={state} />
    </div>
  );
}

export default A;
