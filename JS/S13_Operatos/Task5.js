var x = 10; //15

var result = x++ + ++x + x++ + ++x + ++x;
//   10 + 12+ 12+ 14+15

console.log(result); // 63
console.log(x);
