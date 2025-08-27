// in this lesson the IIFE is wrapping the function inside IIFE which is (function here (we add this to invoked the function))
const calculator = (function () {
  {
    const addition = (a, b) => a + b;
    const subtraction = (a, b) => a + b;
    const division = (a, b) => a + b;
    const multiplication = (a, b) => a + b;

    return { addition, subtraction, division, multiplication };
  }
})();

const add = calculator.addition(23, 23);

console.log(add);
