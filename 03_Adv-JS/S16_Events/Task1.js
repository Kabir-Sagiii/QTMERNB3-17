function fnBody() {
  alert("body");
}

function fnParent() {
  alert("Parent");
}

function fnChild() {
  alert("Child");
}

function fnLoad() {
  var bodyDom = document.querySelector("body");

  var parent = document.getElementsByClassName("parent");
  var parentDom = parent[0];

  var child = document.getElementsByClassName("child");
  var childDom = child[0];

  bodyDom.addEventListener("click", fnBody, false);
  parentDom.addEventListener("click", fnParent, true);
  childDom.addEventListener("click", fnChild, false);
}
