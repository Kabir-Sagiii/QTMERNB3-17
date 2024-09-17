var obj1 = {
  c: 100,
};

var obj2 = {
  c: 500,
};

function fnAdd(a, b) {
  var result = a + b + this.c;
  console.log(result);
}

fnAdd.call(obj1, 10, 10);

fnAdd.call(obj2, 10, 10);
