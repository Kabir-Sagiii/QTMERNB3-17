import { useState } from "react";
import B from "./B";
function A() {
  const [state, setState] = useState("QT");

  var inputData;

  const getInputData = (event) => {
    inputData = event.target.value;
  };

  const printData = () => {
    setState(inputData);
  };

  return (
    <div>
      <h2>A Component</h2>
      <br />
      <input
        type="text"
        placeholder="enter some text"
        onChange={getInputData}
      />
      <button onClick={printData}>Submit</button> <br />
      <br />
      <hr />
      <br />
      <B data={state} />
    </div>
  );
}

export default A;
