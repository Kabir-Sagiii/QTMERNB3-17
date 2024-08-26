var obj1 = {
  name: "Raj",
  id: 101,
  city: "Pune",
};

var obj2 = {
  ...obj1,
  email: "raj@gmail.com",
  city: "Mumbai",
};

// console.log(obj1);
// console.log("--------------------------");
// console.log(obj2);

var arr = [10, 20, 30, 40];

var arr2 = [true, false, ...arr, "hello", "hi"];

console.log(arr);
console.log("------------------");
console.log(arr2);
