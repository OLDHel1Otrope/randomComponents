// 'use strict'
const numbers = [1, 2, 3, 4];
numbers[100] = 500;
console.log(numbers);

function abc() {
  console.log(abc.xyz);
}

abc();

abc.xyz = 78;
abc();

console.log(typeof typeof abc.xyz);

const arr = [..."hello"];
console.log(arr);

console.log(parseInt("10+2"));
console.log(parseInt("7FM ", 16));
console.log(parseInt("M7F"));

console.log([1, 2, 3, 4].map((n) => (n > 2 ? n * 2 : n)));
console.log(
  [1, 2, 3, 4].map((n) => {
    if (n > 2) {
      return n * 2;
    } else return;
  })
);

function x() {
  return;
}

console.log(x());
{
  function ks() {
    console.log("ks");
  }
}

ks();
