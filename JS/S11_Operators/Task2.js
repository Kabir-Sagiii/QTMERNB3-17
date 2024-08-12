var arr = [10, 13, 15, 22, 19, 67, 65, 64];

//Print only even number in the new array 552%2 == 0

var arrData = arr.filter((element, index) => {
  return element % 2 != 0;
});

console.log(arrData);
