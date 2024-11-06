export const productsActionCreator = (products) => {
  return {
    type: "PRODUCTS",
    payload: products,
  };
};
