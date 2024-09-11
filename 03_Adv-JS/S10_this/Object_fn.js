var obj1 = {
  name: "s1",
  city: "c1",
  display: function fn() {
    console.log(this);
  },
  print: () => {
    console.log(this);
  },
};

obj1.display();
obj1.print();
