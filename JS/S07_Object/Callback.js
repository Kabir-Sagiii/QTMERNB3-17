function f1() {
  console.log("f1 is called");
}

function f2(x) {
  // x =function(){----}
  console.log("f2 is called");
  x();
  x();
  x();
}

f2(function () {
  console.log("callback is called");
}); //f1 is a callback and f2 is a HOF
