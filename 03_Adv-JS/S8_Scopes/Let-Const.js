function f1() {
  let city = "hyd";

  if (true) {
    console.log(city);
    let username = "Raj";
    console.log(username);
  }

  if (true) {
    let price = 2345;
    // console.log(username); username is invalid
  }

  if (false) {
  } else {
    // console.log(price, city); price is invalid
  }
}

f1();
