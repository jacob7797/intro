// [0..1]
console.log(Math.random());

// [0..0.5]
console.log(`Skaicius`);
// [0.5..1]
console.log(`Herbas`);

const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm'];

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);
    console.log(week[index]);
}

// Man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai.

for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}

console.clear();
// ND: Man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai.
const randomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Numbers = randomNumber(23, 617)

console.log(Numbers)
