// 1

let farbe = "blau";
switch(farbe) {
    case "rot":
        console.log("Rot ist die Farbe des Blutes")
        break;
    case "blau":
        console.log("Blau ist die Farbe des Himmels")
        break;
    case "grün":
        console.log("Grün ist die Farbe des Waldes")
        break;
    case "gelb":
        console.log("Gelb ist die Farbe der Sonne")
        break;
    default:
        console.log("Es gibt keine Farbe")
        break;
}

// 2

let note = 2;
switch(note) {
    case 1:
        console.log("Super!")
        break;
    case 2:
        console.log("Gut, weiter so")
        break;
    case 3:
        console.log("Befriedegend")
        break;
    case 4:
        console.log("Ausreichend!")
        break;
    case 5:
        console.log("Nicht bestanden")
        break;
    case 6:
        console.log("Nicht bestanden!")
        break;
    default:
}        

// 3

let frucht = "banane";
switch(frucht){
    case "banane":
        console.log("Banane ist gelbes Frucht ");
        break;
    case "orange":
        console.log("Orange ist oranges Frucht");
        break;
    case "erdbeere":
        console.log("Erdbeere ist rotes Frucht");
        break;
    case "apfel":
        console.log("Apfel ist grünes oder rotes Frucht");
        break;
    default:
        console.log("Es gibt kein Frucht")
        break;
}

// 4

let prozentFertig = 100;
switch(true){
    case prozentFertig < 30:
        console.log("Noch ein langer Weg");
        break;
    case prozentFertig > 30 && prozentFertig <= 50:
        console.log("Wir kommen langsam näher");
        break;
    case prozentFertig > 50 && prozentFertig <= 80:
        console.log("Du kannst es");
        break;
    case prozentFertig > 80 && prozentFertig <= 99:
        console.log("Nur noch ein Stück!");
        break;
    case prozentFertig === 100:
        console.log("Gut gemacht! Du bist da!");
        break;
}

// switch
// Kann eine größe Daten Menge besser behandeln
// Viele Möglichkeit/Fällen
// Ist schneller als if-else