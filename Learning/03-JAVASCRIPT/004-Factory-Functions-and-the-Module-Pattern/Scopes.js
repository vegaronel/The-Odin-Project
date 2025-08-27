function makeAdd(firstnumber) {
  const first = firstnumber;

  return function addAnother(secondNumber) {
    const second = secondNumber;

    return first + second;
  };
}
// After we execute the makeAdd function it will still work even the "first"
// variable is outside the addAnother function, resulting to return the
// addAnother function and the "first" variable will be passed;
const result = makeAdd(2);

console.log(result(2));
