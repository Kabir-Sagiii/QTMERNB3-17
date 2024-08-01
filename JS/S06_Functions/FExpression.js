var fn = function () {
  console.log("Function Expression");
};

var f1 = function add(p1) {
  console.log("add is called", p1);
  return "hello";
};

fn();
f1(100);
