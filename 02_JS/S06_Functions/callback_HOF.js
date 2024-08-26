function fnTask(x) {
  // console.log(x);
  x();
}

fnTask(function () {
  console.log("callback function");
});

fnTask(function f1() {
  console.log("named function");
});

fnTask(() => {
  console.log("Arrow");
});
