function fnPromise() {
  let promiseobject = new Promise(function (resolve, reject) {
    resolve({
      ok: true,
      results: [{ name: "s1" }, { name: "s2" }, { name: "s3" }],
    });
  });

  return promiseobject;
}

var promiseObject = fnPromise();
//here whenever fnPromise() is called, it will return promise object
console.log(promiseObject);
