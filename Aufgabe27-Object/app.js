// 1

let person = {
    name: 'Peter Pan',
    alter: 10
}

let personKeyCheck = Object.keys(person);
console.log(personKeyCheck);

'wohnort' in person ? console.log(`Wohnort ist: ${person.wohnort}`): console.log('Eigenschaft ist nicht vorhanden ');

'name' in person ? console.log(`Name ist: ${person.name}`) : console.log('Eigenschaft ist nicht vorhanden ');


// 2
let obbj1 = { a: 44, b: 45, c: 46 };

let obj2 = { pot: 1, tot: 2, not: 3 }

const hasKey = ( obj, key) => {
    let keys = Object.keys(obj)
        if ( keys.includes(key) ) {
            console.log(true);
        } else {
            console.log(false);
        }
}

hasKey(obbj1, 'd');
hasKey(obj2, 'not');

// Internationale Grüße

const guest_list = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
    }

for(let key in guest_list){
    console.log(`Hi! I'm ${key}, and I'm from ${guest_list[key]}.`);
}

const greeting  = (name) => {
   
   for(let key in guest_list){
       if(key === name){
           console.log(`I'm ${key} I'm from ${guest_list[key]}`);
       }
   }
   
}

greeting("Randy")
greeting("Sam") 


// 2b Umwandeln

let upperCase = {};
for(let key in guest_list){
  upperCase[key] = guest_list[key].toUpperCase();
}

console.log(upperCase);

// 3 Fakten zur Stadt

let stadt1 = {
    Name: "Paris",
    Bevölkerung: "2,140,526",
    Kontinent: "Europa"
    }

let stadt2 = {
    Name: "Tokio",
    Bevölkerung: "13,929,286",
    Kontinent: "Asien"

}

function cityFacts(obj){
   console.log(`${obj.Name} hat eine Bevölkerung von ${obj.Bevölkerung} und ligt in ${obj.Kontinent}. `);
}

cityFacts(stadt1);
cityFacts(stadt2);

// 4 Volumen rechnen Schritte 1

let box = {
    breite: 2,
    länge: 2,
    höhe: 2
}

console.log(box.breite*box.länge*box.höhe);




// Schritt 2


function volumeOfBox(werte){
    console.log(werte.breite*werte.länge*werte.höhe);
}


let box1 = { 
    breite: 2, 
    länge: 5, 
    höhe: 1 
    }
volumeOfBox(box1)

let box2 = { 
    breite: 4, 
    länge: 2, 
    höhe: 2 
    }

volumeOfBox(box2)

let box3 = { 
    breite: 2, 
    länge: 3, 
    höhe: 5
    }

volumeOfBox(box3)


// 5: Bonus

let profit = {
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
}

let profit2 = {

    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
}

let profit3 = {
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
}


function gewinn(obj){
    console.log(Math.round((obj.sellPrice - obj.costPrice) * obj.inventory));
}

gewinn(profit);
gewinn(profit2);
gewinn(profit3)







