const Prompt = require("prompt-sync")();
const input = Prompt("input the number : ");
function factorial(number) {
  let result = number;
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return (result *= factorial(number - 1));
  }
  return result;
}
function fibonacci(number) {
  if (number == 0) {
    return 0;
  } else if (number > 0 && number <= 2) {
    return 1;
  } else {
    let arr = [0, 1];
    for (let i = 2; i <= number; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr;
  }
}
function makeNumber2part(number) {
  number = Number(number);
  if (number == 0) {
    return `${1}-1 = 0`;
  } else {
    if (number % 2 != 0) {
      return `${(number + 1) / 2} + ${(number - 1) / 2} = ${number}`;
    } else {
      return `${number / 2} + ${number / 2} = ${number}`;
    }
  }
}
console.log(`factorial of the number ${input} is : ${factorial(input)}`);
// let n = fibonacci(input);
console.log(
  `Fibonacci series of ${input} numbers : ${fibonacci(input).join(", ")}`
);
console.log(makeNumber2part(input));
