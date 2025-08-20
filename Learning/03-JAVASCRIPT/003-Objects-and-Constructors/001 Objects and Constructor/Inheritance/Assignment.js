function Animals(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
}

function Dog(type, name, age, habitat, personality) {
  Animals.call(this, type, name, age);
  this.habitat = habitat;
  this.personality = personality;
}

Dog.prototype.showDog = function () {
  console.log(
    `The ${this.type} is ${this.personality}, his name is ${this.name} and he lives in ${this.habitat}`
  );
};

Object.setPrototypeOf(Dog.prototype, Animals.prototype);

const nero = new Dog("Dog", "Nero", 2, "Land", "shy");

nero.showDog();
