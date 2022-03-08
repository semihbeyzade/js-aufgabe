// 1

let essen = {
    fruestueck: 'Brei',
    mittag: 'Salat',
    abendessen: {
        vorspeise: 'Suppe',
        hauptgang: 'Spargel mit Kartoffeln und Schinken',
        nachtisch: 'Chokoladenpudding'
    }
}

let {abendessen: {nachtisch: süßigkeit}} = essen
console.log(süßigkeit);


// andere Methode

let neuNachtisch = essen.abendessen.nachtisch;
console.log(neuNachtisch);

// 2

function ergebnisAusgabe(obj){
   for(let key in obj){
       console.log(obj[key]);
   }
}

ergebnisAusgabe(essen)

// 3

let adressen = [
    { 
        straße: 'Vulkanstraße', 
        hausnummer: 10 
    },
    { 
        straße: 'Rigaer straße', 
        hausnummer: 30 
    },
    {
        straße: 'Frankfurter Alle', 
        hausnummer: 101, 
    }]

    const straße = adressen.map(adresse => adresse.straße)
    console.log(straße);

// Bonus

let objekt = {
    student: 'Klaus Peter',
    fach: 'Web-Entwicklung',
    noten: [1, 2, 1, 4, 5, 3],

    // andere Methoden
    durchschnittBerechnen: function(){
        let summe = this.noten.reduce((a,b) => a + b)
        let durchschnitt = summe / this.noten.length
        return durchschnitt
    }
}

let notenInObjekt = objekt.noten
const neu = notenInObjekt.reduce((a,b) => a + b, 0) / notenInObjekt.length 
console.log(neu);
console.log('funktion', objekt.durchschnittBerechnen());

