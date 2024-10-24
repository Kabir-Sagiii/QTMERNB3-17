import { useContext } from "react";
import myFirstContext from "./Context";
import D from "./D";
function C() {
  let d = useContext(myFirstContext);
  return (
    <div style={{ padding: "10px", margin: "10px 0px" }}>
      <h2>
        C Component : <span style={{ color: "red" }}>{d}</span>
      </h2>
      <br />
      <hr />
      <D />
    </div>
  );
}

export default C;
