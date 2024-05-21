/*
OBJECT - objektas
*/

const empty = {};
console.log(empty);

const stud1 = {
    name: `Jonas`,
    age: 99,
    isMarried: true,
}
console.log(stud1);

console.clear();
// const stud2 = {
//  name: `Maryte`,
//  age: 88,
//  isMarried: false,
// }
// console.log(stud2);

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

// Sveiki, as VARDAS, man XX metu ir esu/nesu vedes.

function introduction(stud) {
    const status = stud.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${stud.name}, man ${stud.age} metu ir ${status} vedes.`;
}

for (let i = 0; i < students.length; i++) {
    console.log(introduction(students[i]));
}