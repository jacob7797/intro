/*
ARRAY - masyvas, sarasas, listas, matrica
*/

const empty =  [];
console.log(empty);
//             0,  1, 2, 3, 4, ....
const marks = [10, 2, 8, 4, 6];
console.log(marks);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average1 = sum / count;

console.log(average1);

const sum2 = marks[0] + marks [1]
const count2 = marks.length;
const average2 = sum2 / count2;

console.log(`Suma`, sum2);
console.log(`Kiekis`, count2);
console.log(`Vidurkis`, average2);

console.log(`>>>`, marks[0]);

let sum3 = 0;
let index = 0; 
sum3 = sum3 + marks[0];
sum3 = sum3 + marks[1];
sum3 = sum3 + marks[2];
sum3 = sum3 + marks[3];
sum3 = sum3 + marks[4];

console.log(sum3);

console.clear();

const student = [];

function marksAverage(marks) {
    if (marks.length === 0) 
    return `Vidurkis: nera pazymiu.`;
    }

    if(marks.length === 1) {
    return `Vidurkis: ` + marks[0];
}


const jonoPazymiai = [];
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));