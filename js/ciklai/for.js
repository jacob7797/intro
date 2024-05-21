/*
FOR - pagrindinis ciklas (en. - loop)
*/

// atstumas: 100m
// zingsnis: 1m
// zingsniu: 80-200

// ciferblatas: 60 padalu
// trukme padalos 1s
// laiko? 60s

console.log(`START`);

for (let i = 20; i > 10; i -= 2.3) {4
    console.log(i);
}

for (let i = 200; i > 100; i -= 23) {4
    console.log(i / 10);
}

console.log(`FINISH`);

console.clear()

const colors = [`white`, `black`, `red`, `green`, `blue`]
console.log(colors);

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

console.log(`-------`);

for (let i=colors.length -1; i > -1; i--) {
console.log(i, colors[i]);
}

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i=0; i<marks.length; i++) {
    sum += marks[i];
}

console.log(sum / marks.length);

const jonas = [];
const maryte = [10, 2]
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const text = `Labas`;

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);

console.clear();


//* ND - 1


// A 0 .. 0

let sum0 = 0 ;
for(let i = 0 ; i <= 0 ; i++){
        sum0 += i;
}
console.log(sum0);

// B 0 .. 4

let sum1 = 0 ;
for(let i = 0 ; i <= 4 ; i++){
        sum1 += i;
}
console.log(sum1);

// C 0 .. 100

let sum2 = 0 ;
for(let i = 0 ; i <= 100 ; i++){
        sum2 += i;
}
console.log(sum2);

// D 574 .. 815

let sum3 = 574 ;
for(let i = 0 ; i <= 815 ; i++){
        sum3 += i;
}
console.log(sum3);

// E -50 .. 50

let sum4 = -50 ;
for(let i = 0 ; i <= 50 ; i++){
        sum4 += i;
}
console.log(sum4);

// F -70 .. 30
let sum5 = -70 ;
for(let i = 0 ; i <= 30 ; i++){
        sum5 += i;
}
console.log(sum5);




// ND - 2

const tekstas= `ABCDEF`;

console.log(tekstas[5]);
console.log(tekstas[4]);
console.log(tekstas[3]);
console.log(tekstas[2]);
console.log(tekstas[1]);
console.log(tekstas[0]);

// ND - 3


let x = 5;

x = x + 1;
x += 1;
x++;
++x;