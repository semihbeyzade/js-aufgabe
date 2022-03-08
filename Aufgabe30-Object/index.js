// 1 (Rezeptkarte)
const rezept = {
    titel: 'Kartoffelsalat',
    portionen: 2,
    zutaten: ['zimt', 'kreuzkümmel', 'kakao'],
};

function druckRezept(rezept){
    console.log(rezept.titel);
    console.log(`Portionen ${rezept.portionen}`);
    console.log(`Zutaten:`);
    console.log(rezept.zutaten);

    for(let i = 0; i < rezept.zutaten.length; i++){
        const zutat = rezept.zutaten[i];
        console.log(zutat);
    }
}

druckRezept(rezept);


// 2 (Leseliste)

const buchListe = [
    {titel: 'Hobbit',
     autor: 'J. R. R. Tolkien',
     alreadyRead: false
    },
    {
     titel: 'Schuld und Sühne',
     autor: 'F. M. Dostojewski',
     alreadyRead: true
    },
];

for(let buch of buchListe){
   if(buch.alreadyRead){
       console.log(`${buch.titel} von ${buch.autor} bereits gelesen`);
   }else{
       console.log(`Sie müssen noch ${buch.titel} von ${buch.autor} lesen`);
   }
}

// Ternary

for(let buch of buchListe){
    buch.alreadyRead ? 
    console.log(`${buch.titel} von ${buch.autor} bereits gelesen`)
    : console.log(`Sie müssen noch ${buch.titel} von ${buch.autor} lesen`)
    
 }
 
