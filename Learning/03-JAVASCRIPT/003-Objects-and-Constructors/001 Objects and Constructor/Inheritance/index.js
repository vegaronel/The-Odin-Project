function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.introduce = function () {
  console.log(`Hi i am ${this.name} and my age is ${this.age}`);
};

function Dog(name, age, sound) {
  this.name = name;
  this.age = age;
  this.sound = sound;
}

// Create a method for the Dog constructor
Dog.prototype.bark = function () {
  console.log(this.sound);
};

// Inherit the Animal's method to Dog prototype
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Combined the methods
Dog.prototype.bark = function () {
  this.introduce();
  console.log(this.sound);
};

const nero = new Dog("Nero", 3, "Woof");

nero.bark();
