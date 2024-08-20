var productName = "Trimmer";
var products = ["Samsung Galaxy", "Macbook", "Asus vivobook", "Trimmer"];

function printProductIndexNumber() {
  if (productName == products[0]) {
    console.log("0");
  } else if (productName == products[1]) {
    console.log("1");
  } else if (productName == products[2]) {
    console.log("2");
  } else if (productName == products[3]) {
    console.log("3");
  } else {
    console.log("not matching with any element");
  }
}

printProductIndexNumber();
