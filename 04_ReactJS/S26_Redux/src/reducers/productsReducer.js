const productsReducer = (state = [], action) => {
  console.log("productsReducers");
  if (action.type === "PRODUCTS") {
    state = action.payload;
  }
  return state;
};

export default productsReducer;
