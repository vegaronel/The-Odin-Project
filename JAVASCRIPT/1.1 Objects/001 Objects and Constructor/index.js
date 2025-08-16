function Player(name, age) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
  this.sayAge = () => {
    console.log(this.age);
  };
}

const player1 = new Player("Ronel", 24);
player1.sayName();
player1.sayAge();
