/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=


Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

const age = 99;
const ageLimit = 18;
// 1 variantas

if (age < ageLimit) {
    console.log(`Sorry, bet esi per jaunas...`);
}

// 2 variantas
if (age < ageLimit) {
    console.log(`Sorry, bet esi per jaunas...`);
} else {
    console.log(`Ok, uzeik ir pasismagink;)`);
}

console.clear();

if (4 !== 2) {
    console.log(`TAIP, daugiau`);
} else {
    console.log(`NE, maziau`);
}

console.clear();

// 3 variantas

const color = `white`;
let translation = ``;

if (color === `red`){
    console.log(`Raudona`);
} 
 else if(color === `blue`) {
    console.log(`Melyna`);
}
else if (color === `green`) {
    console.log (`Zalia`);
} else {
    console.log(`Nezinau tokios spalvos...`)
}

console.log(`>>>`, translation);
