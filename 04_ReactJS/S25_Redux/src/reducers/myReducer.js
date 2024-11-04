const myReducer = (state, action) => {
  // action = {type: "NAME",payload: data,};
  let newState;
  newState = action.payload;

  return newState;
};

export default myReducer;
