var x = 10; //11 12 13

var y = 10; //11 12 13

var result = x++ + ++y + ++x + y++ + y++ + x++;
//   10 + 11 + 12 + 11 + 12 +12

console.log(result);
68;
console.log(x, y); // 13, 13
//
