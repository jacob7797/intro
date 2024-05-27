const words = [`Labas`, `rytas`, `Lietuva`, `sakau`, `tau`];

// FOR
for (let i=0; i<words.length; i++) {
    const word = words[i];
    console.log(i, word);
}

//  FOR-OF

for(const word of words) {
    console.log(word);
}

const students = [
    {name: `Jonas`, age: 99},
    {name: `Maryte`, age: 88},
    {name: `Petras`, age: 77},
    {name: `Ona`, age: 66},
];

for (let i=0; i<students.length; i++) {
    const student = students [i];
    console.log(i, student);
}

let forOfi = 0;
for (const student of students) {
    console.log(`--`,forOfi++, student);
}

// WHILE

const words2 = [`Labas`, `rytas`, `Lietuva`, `sakau`, `tau`];

let whileI = 0;
while (whileI < words2.length) {
    console.log(`while:`,whileI,words2[whileI]);
    whileI++;
}

console.log(`-----------`);

let i = 0;
for (; i<words2.length;) {
    console.log(`for:`, i, words2[i]);
    i++;
}

