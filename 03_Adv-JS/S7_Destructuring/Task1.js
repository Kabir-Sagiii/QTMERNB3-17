function ReturUsers() {
  var users = ["s1", "s2", "s3", "s4"];

  return users;
}

// let usersArray = ReturUsers();
// let [x, y, z] = usersArray;
// console.log(x, y, z);

let [x, y] = ReturUsers();
console.log(x, y);
