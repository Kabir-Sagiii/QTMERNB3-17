import { useContext } from "react";
import myFirstContext from "./Context";
function E() {
  let contextData = useContext(myFirstContext);
  return (
    <div style={{ padding: "10px", margin: "10px 0px" }}>
      <h2>E Component</h2>
      <p>{contextData}</p>
    </div>
  );
}

export default E;
