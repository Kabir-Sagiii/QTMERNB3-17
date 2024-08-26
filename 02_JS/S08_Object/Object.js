var user = {
  name: "Raj Verma",
  city: "Delhi",
  gender: "male",
};

//Access
var genderValue = user.gender;
var cityValue = user["city"];
console.log(genderValue, cityValue);

//Insert
user.id = 101;
user["email"] = "raj@gmail.com";

console.log(user);

//Modify
user.city = "Hyderabad";
user.name = "Raj Sharma";
user["email"] = "rajSharma@gmail.com";

//Delete
delete user.gender;
delete user.id;
delete user["city"];
console.log(user);
