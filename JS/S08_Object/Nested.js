var user = {
  name: {
    firstName: "Siddharath",
    middleName: "Raj",
    lastName: "Jaiswal",
    address: {
      city: "hyd",
      state: "TG",
    },
  },
  fn: function () {
    console.log("fn is called");
  },
};

var firstNameValue = user.name.firstName;
var cityValue = user.name.address.city;

user.name.address.state = "MH";

// console.log(firstNameValue, cityValue);
// console.log(user);

user.fn();
console.log(user.name.address);
