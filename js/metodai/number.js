/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log(`Number.isFinite()`);
console.log(Number.isFinite(152614));
console.log(Number.isFinite(-152614));
console.log(Number.isFinite(1526.14));
console.log(Number.isFinite(-15.2614));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log(`-------------`);
console.log(`isFinite()`);

console.log(`isNaN()`);
console.log(Number.isFinite(152614));
console.log(Number.isFinite(-152614));
console.log(Number.isFinite(1526.14));
console.log(Number.isFinite(-15.2614));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log(`--------`);
console.log(`parseInt()`);

const a = `87`;
const b = parseInt(`87`);
console.log(typeof a);
console.log(typeof b);

console.log(parseInt(`87`));
console.log(parseInt(`-99`));
console.log(parseInt(`0`));


console.log(`------`);
console.log(`Number.toFixed`);

const c = 5.125;
// 5.00

console.log(c);
console.log(c.toFixed(2));
console.log(parseFloat(c.toFixed(2)));