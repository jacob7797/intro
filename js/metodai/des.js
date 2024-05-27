/*
Destrukturizavimas
gimininga "siela" - spread
*/

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(first);
console.log(second);
console.log(rest);

const b = [10,2];
const first2 = b[0];
const second2 = a[1];
const rest2 = a.slice(2);

console.log(first2);
console.log(second2);
console.log(rest2);

console.clear();
const dict = [`labas`, `rytas`, `Lietuva`, `sakau`, `tau`];
const [word1, word2, ...restOfDict] = dict;
//const restOfDict = dict.slice(2);
console.log(word1);
console.log(word2);
console.log(restOfDict);

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a,b];
}

const res1 = giveMeTwoNumbers();
console.log(res1,res1[0] + res1[1]);

const res2 = giveMeTwoNumbers();
console.log(res2);

const person = {
    name: `Ona`,
    age: 66,
    isMarried: true,
};
const userName = person.name;
const userAge = person.age;
const userIsMarried = person.isMarried;

const { age, name, ...restDetails } = person;
console.log(age);
console.log(name);
console.log(restDetails);

function food() {
    const list = [
        { title: `cepelnai`, count: 2},
        { title: `saltibarsciai`, count: 1},
        { title: `svogunu laiskai`, count: 10},
    ];

    return list[Math.floor(Math.random() * list.length)];
}

const {title, count} = food();

const sentence1 = `Valgysi: ${title}; Kiekis: ${count}.`;
console.log(sentence1);

console.clear();

function drinks(...list) {
    return `Gerimu kiekis: ${list.length}.`;
}

console.log(drinks(`a`, `b`, `c`));

function iLike(name, list) {
    return `${name} megsta ${list.length} spalvas.`;
}

console.log(iLike(`Jonas`, [`red`, `blue`]));
console.log(iLike(`Maryte`, [`white`, `black`,`50greys`]));

function nextFunc(a, b, c, ...restParams) {
    return null;
}

console.log(Math.max(10, 7));
console.log(Math.min(10, 7));

const marks = [10, 2, 8, 4, 6];
console.log(Math.max(...marks));
console.log(Math.min(...marks));
