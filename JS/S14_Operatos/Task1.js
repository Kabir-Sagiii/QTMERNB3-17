var productsData = [
  {
    brandName: "Apple",
    modelName: "Iphone 15",
    price: 90000,
  },
  {
    brandName: "Apple",
    modelName: "Iphone 14",
    price: 70000,
  },
  {
    brandName: "Samsung",
    modelName: "Samsung S24",
    price: 130000,
  },
  {
    brandName: "Samsung",
    modelName: "Samsung A32",
    price: 50000,
  },
  {
    brandName: "Oneplus",
    modelName: "Oneplus 14",
    price: 60000,
  },
  {
    brandName: "Vivo",
    modelName: "Vivo 14",
    price: 60000,
  },
  {
    brandName: "oppo",
    modelName: "oppo 14",
    price: 60000,
  },
];

//IAF to print all Apple Mobies whose Price is greater then 80000

function printProducts() {
  var appleData = productsData.filter(function (element) {
    return element.brandName === "Apple" && element.price > 80000;
  });

  console.log(appleData);
}
printProducts();

//IAF to print all  Mobiles whose brandName is not Apple and Samsung
function printAllProducts() {
  var Data = productsData.filter(function (element) {
    return element.brandName != "Apple" && element.brandName != "Samsung";
  });

  console.log(Data);
}
printAllProducts();
