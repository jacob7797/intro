/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const marks = [10, 2, 8, 4, 6];

console.log([...marks].concat([1, 2, 3]));
console.log([...marks].concat(4, 5));
console.log([...marks].concat(4, 5));
console.clear();

console.log([...marks, 4, 5, ...[1, 2, 3]]);

