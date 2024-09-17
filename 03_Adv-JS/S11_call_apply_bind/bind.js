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

// var f = fnAdd.bind(obj1);
// f(50, 50);

// var fnAdd = fnAdd.bind(obj2);
// fnAdd(60, 50);

// var fnAdd = fnAdd.bind(obj2, 60, 60);
// fnAdd();

// fnAdd.bind(obj1, 60, 60)();

fnAdd.bind(obj2)(60, 60);
