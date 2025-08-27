const obj = {
  name: "ronel",
  age: 24,
};

// for destructuring an object we should specify the property as we can see example
// below if we check the obj we have a property of name and age
// this is also equivalent to
// const name = obj.name;
// const age = obj.age;

const { name, age } = obj;

// ronel, 24
console.log(name, age);

// for an array it will start from index 0
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [indexZero, indexOne, ...rest] = arr;

// 1, 2
console.log(indexZero, indexOne);

// if we want to get the rest of the data we can use spread syntax (...)
console.log(...rest);
