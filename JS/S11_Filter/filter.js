var arr = [10, 20, 40, 50, 60, 70, 80, 90];

var filterArray = arr.filter(function (element, index) {
  return element < 30; // 10 > 50
});

console.log(filterArray); // [60, 70, 80, 90]
