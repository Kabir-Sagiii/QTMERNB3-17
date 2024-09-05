function f1() {
  return [
    { name: "S1", city: "c1" },
    { name: "S2", city: "c2" },
  ];
}

const [x, y] = f1();
var { name, city } = x;

console.log(city);
