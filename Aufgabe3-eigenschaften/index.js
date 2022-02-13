// 1

let laufen = "I kann den ganzen Tag im Park umherlaufen";
    laufen = "Park";

console.log(laufen);

// 2

let text = "Hallo Welt";
let grossBuchstabe = text.toUpperCase();

console.log(grossBuchstabe);

// 3

let text2 = "Hallo Erdling";
let kleinBuchstabe = text2.toLowerCase();

console.log(kleinBuchstabe);

// 4

let computerSprache = "JavaScript";
let teilVomText = computerSprache.substring(3,6);

console.log(teilVomText);

// 5

let sache = "schöne Schuhe";
let test = sache.includes("n");
let test2 = sache.includes("i");

console.log(test);
console.log(test2);

// 6

let obst = "Banane";
let ersteBuchstabe = obst[0];
let aenderung = ersteBuchstabe + obst + ersteBuchstabe;

console.log(aenderung);

// 7

let dinge = "Perlen";
let letzteSilbe = dinge.substring(3,6);
let neuText = letzteSilbe + dinge + letzteSilbe;

console.log(neuText);

//8

let gebaeude = "Parlament";
let erste = gebaeude[0];
let letzteBuchstabe = gebaeude[gebaeude.length -1];
let teilText = gebaeude.substring(1,8);
let ganzeText = letzteBuchstabe + teilText + erste;

console.log(ganzeText);

// 9

let name = "Semih";
let stadt = "Bonn";
let beruf = "Web-Software Entwickler";

console.log(`Ich bin ${name} und lebe ${stadt}. Ich bin ${beruf}.`);

// 10

let uebung = "franz jagt im taxi durch bayern";
let firstBuchstabe = uebung[0];
let grossAnfang = firstBuchstabe.toUpperCase();
let teilVomSatz = uebung.substring(1,31);
let meinSatz = grossAnfang + teilVomSatz;

console.log(meinSatz);



