const diena = 6;

if (diena === 1) {
    console.log(`Pirmadienis`);
}  else if (diena === 2) {
    console.log(`Antradienis`);
}  else if (diena === 3) {
    console.log(`Treciadienis`);
}  else if (diena === 4) {
    console.log(`Ketvirtadienis`);
}  else if (diena === 5) {
    console.log(`Penktadienis`);
}  else if (diena === 6) {
    console.log(`Sestadienis`);
}  else if (diena === 7) {
    console.log(`Sekmadienis`);
}  else {
    console.log(`Ne savaites diena`);
}

console.clear();
// SWITCH ==

const day = 6;

switch (day) {
    case 1:
        console.log(`Pirmadienis`);
        break;

    case 2:
        console.log(`Antradienis`);
        break;
    
    case 3:
        console.log(`Treciadienis`);
        break;

    case 4:
        console.log(`Ketvirtadienis`);
        break;
        
    case 5:
        console.log(`Penktadienis`);
        break;

    case 6:
        console.log(`Sestadienis`);
        break;

    case 7:
        console.log(`Sekmadienis`);
        break;

    default:
        console.log(`Ne savaites diena`);
        break;    
}


// PAVIZDYS - autobusas -> marsrutas -> a->b; b->a.

const stop = `Rudens`;

const stopList = [];

switch (stop) {
    case `N. Vilnia` :
        stopList.push(`N. Vilnia`);

     case `Tremtiniu` :
        stopList.push(`Tremtiniu`);
        
     case `Rudens` :
        stopList.push(`Rudens`);

     case `K. Mindaugo` :
        stopList.push(`K. Mindaugo`);
        
     case `Vasaros` :
        stopList.push(`Vasaros`);   
}

console.log(stopList.join(`->`));
