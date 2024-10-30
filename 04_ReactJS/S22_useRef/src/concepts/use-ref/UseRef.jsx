import { useState, useRef } from "react";

function UseRef() {
  console.log("rendered");
  const [state, setState] = useState(100);
  let myRef = useRef(0); //myRef = {current:0}

  const changeState = () => {
    setState(state + 1);
  };

  const changeRefValue = () => {
    myRef.current = 1;
  };

  const print = () => {
    console.log("ref", myRef.current);
    console.log("state ", state);
  };

  return (
    <div style={{ padding: "100px" }}>
      <h2 style={{ margin: "20px 0px" }}>useRef Concept :{state}</h2>
      <button style={{ marginRight: "20px" }} onClick={changeRefValue}>
        Change Ref Value
      </button>
      <button style={{ marginRight: "20px" }} onClick={changeState}>
        Change State Value
      </button>
      <button style={{ marginRight: "20px" }} onClick={print}>
        Print State and Variable Value
      </button>
    </div>
  );
}

export default UseRef;
