function myThisConcept() {
  console.log("Named function", this); //Global Object
}

myThisConcept();

const myArrowFn = () => {
  console.log("Arro function", this);
};

myArrowFn();
