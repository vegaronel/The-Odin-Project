// create constructor
function Students(name, age, block) {
  Block.call(this, block);
  this.name = name;
  this.age = age;
}

function Block(block) {
  this.block = block;
}

Block.prototype.callBlock = function () {
  console.log(`You are block ${this.block}`);
};

Object.setPrototypeOf(Students.prototype, Block.prototype);

// add a method inside constructor
Students.prototype = {
  greet() {
    console.log(`${this.name} is saying hi.`);
  },
  greetAgain() {
    console.log(`HELLOO i am greeting you again!`);
  },
};

newProto.prototype = Object.create(Students.prototype);

function newProto(name, age, material, skill) {
  Students.call(this, name, age);
  this.material = material;
  this.skill = skill;
}

const activityOne = new newProto("Ronel", 23, "pen", "coding");

activityOne.greet();
