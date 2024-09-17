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

fnAdd.apply(obj1, [30, 30]);

fnAdd.apply(obj2, [30, 30]);
