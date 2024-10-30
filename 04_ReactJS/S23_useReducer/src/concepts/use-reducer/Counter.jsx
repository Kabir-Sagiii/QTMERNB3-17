import { useReducer } from "react";

const counterReducer = (state, action) => {
  //Logics to update state based on different action

  if (action.type === "inc1") {
    state = state + 1;
  } else if (action.type === "inc5") {
    state = state + 5;
  } else if (action.type === "dec1") {
    state = state - 1;
  } else {
    state = state - 3;
  }

  return state;
};

function Counter() {
  let [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "red", marginBottom: "10px" }}>
        Count Value is :{state}{" "}
      </h2>
      <button
        style={{ marginRight: "20px" }}
        onClick={() => {
          dispatch({ type: "inc1" });
        }}
      >
        incCount by 1
      </button>
      <button
        style={{ marginRight: "20px" }}
        onClick={() => {
          dispatch({ type: "inc5" });
        }}
      >
        incCount by 5
      </button>
      <button
        style={{ marginRight: "20px" }}
        onClick={() => {
          dispatch({ type: "dec1" });
        }}
      >
        decCount by 1
      </button>
      <button
        style={{ marginRight: "20px" }}
        onClick={() => {
          dispatch({ type: "dec3" });
        }}
      >
        decCount by 3
      </button>
    </div>
  );
}

export default Counter;
