var obj1 = {
  name: "s1",
  city: "c1",
  email: "s1@gmail.com",
};

var obj2 = {
  ...obj1,
  name: "s2",
};

// console.log(obj1);
// console.log("==================");
// console.log(obj2);

var arr1 = [10, 20, 30, 40];

var arr2 = [true, false, ...arr1, "s1", "s2"];

console.log(arr1);
console.log("==================");
console.log(arr2);
