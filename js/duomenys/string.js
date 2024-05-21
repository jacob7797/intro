/*
STRING - tekstas, tekstiniu simboliu grandinele

iniciavimas: '(vienguba), "(dviguba), `(backtick)           

*/

const name = `Jonas`;
console.log(name);

const name2 = `Maryte`;
console.log(name2);

const sakinys = `Labas rytas, Lietuva!`;
console.log(sakinys);

// Vienguba (`) kabute.
const kabutes1 = "Vienguba(`) kabute. ";
console.log(kabutes1);

// Dviguba (") kabute.
const kabutes2 = `Dviguba (") kabute.`;
console.log(kabutes2)

const personName = `Chuck`;
const personSurname = `Norris`;
const fullname = personName + ` ` + personSurname;
console.log(fullname);

// Vienguba (`) ir dviguba (") kabutes.
const kabutes12 = "Vienguba (`) ir" + ` dviguba (") kabutes`;
console.log(kabutes12);

/*
Pinigines turinys: 0;
Pinigines papildyta: 10;

Pinigines turinys: 10;
Pinigine papildyta: 90;

Pinigines turinys: 100;

*/

let pinigine = 0;
console.log(pinigine);

pinigine = pinigine + 10;
console.log(pinigine);

pinigine = pinigine + 90;
console.log(pinigine);


/*
<header>
    <img>  
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

// \r - return
// \n - new line
// \t - tab
const HTML = `<header>\n\
    <img>\
    <nav>\
        <a></a>\
        <a></a>\
        <a></a>\
    </nav>\
</header>`;

console.log(HTML);

