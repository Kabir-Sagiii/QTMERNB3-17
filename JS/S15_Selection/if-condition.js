function f1(value) {
  var x = value;

  if (x > 15) {
    console.log("Statement 1");
  }

  if (x < 15) {
    console.log("Statement 2");

    console.log("Statement 3");

    console.log("Statement 4");
  }
}

f1(30);
console.log("----------------------------");
f1(10);
