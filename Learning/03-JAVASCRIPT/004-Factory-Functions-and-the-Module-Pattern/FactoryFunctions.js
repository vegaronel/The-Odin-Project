const name = "Ronel";
const age = 24;
const color = "blue";

// Ronel, 24, blue
console.log(name, age, color);

// to not get confused you may put it inside curly braces {name, age, color}
// { name: 'Ronel', age: 24, color: 'blue' }
console.log({ name, age, color });

// example of constructor from the old lesson
function User(name) {
  this.name = name;
  this.userName = "@" + name;
}

// create a new user
const userOne = new User("Ronel");

// another example to make the same constructor using a method
// the advantage of using this method is we dont need to use the new method, unlike the constructor
function createUser(name) {
  const username = "@" + name;

  return { name, username };
}

console.log(createUser("ronel"));
