// 0

let apfel = 20;
let orange = 30;

// 1

console.log('Apfel und Orangen sind gleich ?', apfel === orange);

// 2

let control = apfel != orange;
console.log('Äpfel und Orangen sind nicht gleich:', control);

// 3

let vergleichGroße = apfel > orange ;
console.log('Äpfel größer sind als Orangen:', vergleichGroße);

// 4

let vergleichGroße1 = apfel <= orange ;
console.log(`Äpfel kleiner als oder gleich Orangen sind:${vergleichGroße1}`);

// 5

let vergleichGroße2 = orange > apfel;
console.log('Orangen größer sind als Äpfel:', vergleichGroße2);

// 6

let mangos = 5;
let var1 = mangos * apfel;
let var2 = mangos + orange;
let controlVonErgebnis = var1 > var2;

console.log('das Ergebnis größer ist als die Summe von Mangos und Orangen:', controlVonErgebnis);

// 7

let subtrahieren = apfel - mangos;
let teilen = orange / mangos;
let controlVonErgebnis2 = subtrahieren < teilen;

console.log('das Ergebnis kleiner ist als Orangen geteilt durch Mangos:', controlVonErgebnis2);

// 8

let prufung = apfel === orange === mangos;
console.log('Mangos, Äpfel und Orangen gleich sind:', prufung);

// 9

let restVonApfel = apfel % mangos;
let restVonOrange = orange % mangos;
let restVergleich = restVonApfel === restVonOrange;

console.log('der Rest von Äpfeln geteilt durch Mangos und der Rest von Orangen geteilt durch Mangos gleich sind:', restVergleich);

// 10

let summeVonApfelUndMangos = apfel + mangos;
let minusVonOrangenUndMAngos = orange - mangos;
let restVergleich2 = summeVonApfelUndMangos > minusVonOrangenUndMAngos;

console.log('die Summe aus Mangos und Äpfeln größer ist als Orangen minus Mangos:', restVergleich2);

let restVergleich2Wieder = summeVonApfelUndMangos + 15 > minusVonOrangenUndMAngos;
console.log(' die Summe aus Mangos und Äpfeln größer ist als Orangen minus Mangos:', restVergleich2Wieder);






