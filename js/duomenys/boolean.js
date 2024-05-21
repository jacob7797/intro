/*
BOOLEAN - logines reiksmes

naudojimas su klausimais ir turi logine reiksme

- true
- false

Boolean logikos operatoriai:
-&& (and)
- || (or)
- ! (no)
*/

const username = `Jonas`;
const age = 99;
const isSunShine = true;
const hasFuel = false;

console.log(isSunShine);
console.log(hasFuel);

console.log(`Kaip nenaudoti:`, true + true);
console.log(`Kaip nenaudoti:`, true * false);

console.log(`-----------------`);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(true && false);

// Mergina
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = true;
const isYoung = true;
const isRich = true;

const willIGoTo = isBeautiful && isYoung && isRich;
console.log(`>>>`, willIGoTo);

/*
|| (or) - tai turi buti bent viena salyga tenkinama - ir atsakymas true
&& (and) - tai visos salygos turi buti tenkinamos, jei bent vien salyga netenkinama tai atsakymas - false
*/

console.log(2+2*2);

console.log(true && true && true && true);
console.log(true && true && true && false);

console.log(true && true && true || true);
console.log(true && true && true || false);

/*
kombinacijos
2**7=128
*/

console.log(!true);
console.log(!false);
console.log(!!false);
// daugiau nei dveju sauktu praktikoje nereikia

console.clear();

if (4 == `4`) {
    console.log(`Taip`);
}   else {
    console.log(`Ne`);
}