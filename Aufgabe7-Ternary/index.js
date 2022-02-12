// Conditional Operator:
// 1

let istHund = false;
console.log(istHund ? 'du bist ein Guter' : 'such mir einen Hund!');

// 2

let speedTest = 60;
console.log(speedTest > 50 ? 'du bist zu schnell' : 'du bist eine lahme Schnecke');

// 3

let alter = 18;
console.log(alter < 16 ? 'Butterbier servieren' : 'Serviere Bier');

// 4

let istStudent = true;
console.log(istStudent ? 'Ticket für 5.00$ aus' : 'Ticket für 12.00$');

// 5

let kaffeTrinken = 'Kuchen';
console.log(kaffeTrinken === 'Kuchen' ? 'Lasst uns Kuchen essen' : 'Oh, Mist!');

// Mit Logischen Operatoren
// 1

let punkte = 85;
punkte > 50 ? console.log('Test bestanden') : console.log('Du musst den Test wiederholen');

// 2

let wetter = 'Sonne';
!!wetter ? console.log('Die Sonne scheint heute') : console.log('Oh, oh, es wird kalt');

// 3

let tag = 'Montag';
//let uhrzeit = 12;
let uhrzeit = 14;

tag === 'Montag' && uhrzeit === 12 ? console.log('Zeit für die Mittags Pause') : console.log('Keine Pause');
