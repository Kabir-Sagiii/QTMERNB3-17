function fnPromise() {
  let promiseobject = new Promise(function (resolve, reject) {
    reject({
      ok: false,
      error: {
        msg: "Something went wrong",
        statuscode: 404,
      },
    });
  });

  return promiseobject;
}

var promiseObject = fnPromise(); //90% consumers

promiseObject
  .then(function (successData) {
    console.log("then executed");
    console.log(successData);
  })
  .catch(function (errorData) {
    console.log("catch executed");
    console.log(errorData);
  });
