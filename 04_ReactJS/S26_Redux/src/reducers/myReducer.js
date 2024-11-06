const myReducer = (state = "xyzabc", action) => {
  console.log("reducer is called", state);

  if (action.type === "NAME") {
    state = action.payload;
  }

  return state;
};

export default myReducer;
