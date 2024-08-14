var x = 10;

var result = x++ + x-- + x++ + --x + ++x;
//            10+11+10+10+11
console.log(result); // 52
console.log(x); //11
