// 1

let person = {
    vorname: 'Semih',
    nachname: 'Örscelik',
    alter: 28,
    wohntIn: 'Düsseldorf'
}

// 2

for(let prop in person){
    console.log(prop + "=" + person[prop]);
}


// 3

person.vorname = 'Beyzade'
person.nachname = 'Galatasaray'

// 4

let arbeitsStunden = {
    mitarbeiter: ['Anne','Berta','Claus'],
    stunde: [10,15,8],
}

console.log(`${arbeitsStunden.mitarbeiter[0]} hat ${arbeitsStunden.stunde[0]} Stunden gearbeitet, ${arbeitsStunden.mitarbeiter[1]} ${arbeitsStunden.stunde[1]} und ${arbeitsStunden.mitarbeiter[2]} ${arbeitsStunden.stunde[2]}, Die Summe der Arbeitsstunden ist ${arbeitsStunden.stunde[0] + arbeitsStunden.stunde[1] + arbeitsStunden.stunde[2]} Stunden.`);


// 5

let brot = {
    sorte: 'vollkorn',
    kilo: 0.2,
    kaufpreis: 0.5
}
console.log(brot);
//brot.kilo = 0.2*2;
//brot.kaufpreis = 0.5*2 + '$'

const doppeltPreis = (obj) => {
    obj.kilo = obj.kilo * 2 
    obj.kaufpreis = obj.kaufpreis * 2
}

doppeltPreis(brot)
console.log(brot);




