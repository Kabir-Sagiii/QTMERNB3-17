var promiseObject = new Promise(function (resolve, reject) {
  reject({
    ok: false,
    error: "Database Server is down",
  });
});

console.log(promiseObject);
