var student = {
  stdname: "Rohan",
  city: "Indore",
  id: 10101,
  gender: "male",
  isPlaced: true,
};

var { stdname, id, city } = student;

function displayStudentData() {
  //   console.log(student.stdname, student.city, student.id);

  console.log(stdname, id, city);
}

function changeStudentNameCity(...info) {
  student.stdname = info[0];
  student.city = info[1];

  console.log(student);
}

// function displayPlacentmentInfo() {
//   if (student.isPlaced) {
//     console.log("Student is Placed");
//   } else {
//     console.log("Student is yet to place");
//   }
// }

displayStudentData();

changeStudentNameCity("Aditya", "Pune");

displayStudentData();

// displayPlacentmentInfo();
