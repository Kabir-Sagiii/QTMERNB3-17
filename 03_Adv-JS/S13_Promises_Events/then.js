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

promiseObject
  .then(function (successData) {
    console.log("then executed");
    console.log(successData);
  })
  .catch(function (errorData) {
    console.log("catch executed");
    console.log(errorData);
  });
