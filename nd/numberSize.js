function numberSize(n) {
    const nAsText = `` + n;    // `` + 2 = `2`
    let size = nAsText.length
    
    // desimtainis
    if (n % 1 !== 0) {
        size --;
    }

    // neigiamas
    if (n < 0) {
        size--;
    }
    
    return size;
}

console.log(numberSize(2), `-->`, 1);
console.log(numberSize(25), `-->`, 2);
console.log(numberSize(4892), `-->`, 4);
console.log(numberSize(3.14), `-->`, 3);
console.log(numberSize(3.1415), `-->`, 5);
console.log(numberSize(-25), `-->`, 2);
console.log(numberSize(-4892), `-->`, 4);
console.log(numberSize(-3.14), `-->`, 3);
console.log(numberSize(-3.1415), `-->`, 5);

console.log(numberSize(NaN));