import { useState } from "react";
import B from "./B";
import myFirstContext from "./Context";
function A() {
  const [data, setData] = useState("-------");
  const updateContext = () => {
    setData("Quality Thought");
  };
  return (
    <div style={{ padding: "10px" }}>
      <h2>A Component</h2>
      <br />
      <button onClick={updateContext}>Send Data</button>
      <br />
      <br />
      <hr />
      <myFirstContext.Provider value={data}>
        <B />
      </myFirstContext.Provider>
    </div>
  );
}

export default A;
