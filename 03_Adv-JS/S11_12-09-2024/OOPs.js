class A {
  name = "Raj";
  city = "Pune";

  display() {
    console.log(this.name, this.city);
  }
}

var a1 = new A(); //a1 = {name:"",city:"",display:function(){}}

var a2 = new A(); //a2 = {name:"",city:"",display:function(){}}

a1.display();

a2.display();
