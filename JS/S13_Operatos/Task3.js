var x = 10; //13

var y = 10; //12

var result = x++ + x++ + y++ + x++ + y++;
//   10 + 11 + 10 + 12 + 11
console.log(result); // 54
console.log(x, y); //13,12
