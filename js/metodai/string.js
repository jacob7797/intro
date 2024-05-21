/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const word = `labas rytas, Lietuva!`;
console.log(word);
console.log(word[4]);


console.log(word.charCodeAt(0));

console.log(`Labas`.concat(`rytas`));

console.log(`Labas`.endsWith(`x`));
console.log(`Labas`.endsWith(`s`));

console.log(`------------`);
console.log(`Labas`.startsWith(`L`));

console.log(`------------`);
console.log(`Pomidoras`.includes(`omi`));

console.log(`------------`);
console.log(`Pomidoras`.indexOf(`o`,3));

console.log(`------------`);
console.log(`A`.repeat(3));

console.log(`------------`);
console.log(`Pomidoras`.replace(`o`, `_`));

console.log(`------------`);
console.log(`Pomidoras`.replaceAll(`o`,`_`));

console.log(`------------`);
console.log(`Pyragelis`.slice(-3));

console.log(`------------`);
const sakinys = `Labas rytas, Lietuva!`
const zodziai = sakinys.split(` `);
console.log(zodziai);

const sakinys2 = `Bananas`;
const dalys = sakinys2.split(`as`);
console.log(dalys);

console.log(`------------`);
console.log(`"` + `Pomidoras`.trim() + `"`);