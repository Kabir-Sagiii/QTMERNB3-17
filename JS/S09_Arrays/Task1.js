var user = {
  name: {
    title: "Mr",
    firstName: "Raj",
    lastName: "Reddy",
  },
  changeName: function (x, y) {
    console.log("Name is Updated", x, y);
    return "hello";
  },
};

var data = user.changeName(10, 20);
console.log(data);
