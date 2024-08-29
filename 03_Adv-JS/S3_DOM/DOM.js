function changeContent() {
  var pDomelement = document.querySelector("#para");
  var h2 = document.querySelector(".title");

  pDomelement.innerText = "DOM Manipulation";
  pDomelement.id = "My-Para";

  h2.innerText = "Javascript is Easy";
  h2.style.color = "red";
  h2.style.backgroundColor = "black";
  h2.className = "my-title";
}
