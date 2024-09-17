function fnPromise() {
  let promiseobject = new Promise(function (resolve, reject) {
    resolve({
      ok: true,
      results: [{ name: "s1" }, { name: "s2" }, { name: "s3" }],
    });
  });

  return promiseobject;
}

async function accessPromiseData() {
  var successData = await fnPromise();
  console.log(successData);
}

accessPromiseData();
