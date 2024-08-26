var products = [
  {
    brandName: "Apple",
    modelName: "Iphone 16 Pro Max",
    price: 170000,
  },
  {
    brandName: "Apple",
    modelName: "Iphone 15 Pro Max",
    price: 130000,
  },
  {
    brandName: "Samsung",
    modelName: "Samsung Galaxy Ultra",
    price: 130000,
  },
  {
    brandName: "Vivo",
    modelName: "Vivo A29 Pro",
    price: 130000,
  },
  {
    brandName: "Samsung",
    modelName: "Samsung A32",
    price: 40000,
  },
];

//Print all object whose brand Name is Apple

var appleBrand = products.filter(function (element) {
  //element = {brandName:""}

  return element.brandName == "Samsung";
});
console.log(appleBrand);
