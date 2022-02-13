// 1 : Schreibe eine Funktion, die einen Parameter nimmt und diesen Parameter dreimal auf  die Konsole ausgibt.

function druckDreiMalAufKonsole(stringZumWiederholen){
      console.log(stringZumWiederholen);
      console.log(stringZumWiederholen);
      console.log(stringZumWiederholen);
}

druckDreiMalAufKonsole('Semih')

// 2: Schreibe eine Funktion, die einen Parameter nimmt und diesen Parameter fünfmal wiederholt zurückgibt. Für die Eingabe "Katze" würde sie "KatzeKatzeKatzeKatze" zurückgeben

function fünfMalString(stringZumWiederholen){
      return stringZumWiederholen.repeat(5);
}

console.log(fünfMalString('Katze'));

// 3: Schreibe eine Funktion, die zwei Parameter nimmt, wobei der erste eine Zahl und der zweite eine Zeichenkette sein sollte. Die Funktion gibt das 2. Argument so oft zurück, wie das 1. Argument definiert ist. Für die Eingaben `3` und "Woah" soll sie `WoahWoahWoah` zurückgeben

function stringXMalWiederholen(xMal, stringZumWiederholen){
    return stringZumWiederholen.repeat(xMal);
}
console.log(stringXMalWiederholen(3, 'Woah'));

// 4: Schreibe eine Funktion, die eine Array mit Zahlen als Parameter nimmt. Sie soll die größte Zahl im Array zurückgeben. Für die Eingabe `[1,6,83,91,0,-4,1337,5]` soll sie `1337` zurückgeben

function findeGroessteZahl(arrayAusZahlen){
    let gedaechtnisZahl = arrayAusZahlen[0];
    for(let i = 0; i < arrayAusZahlen.length; i++){
      if(arrayAusZahlen[i] > gedaechtnisZahl){
          gedaechtnisZahl = arrayAusZahlen[i];
      }
    }
    return gedaechtnisZahl;
}

const arr = [1,6,83,91,0,-4,1337,5];
console.log(findeGroessteZahl(arr));


// 5a: Diese Frage hat 2 Teile

function consoleLogFallDurch10Teilbar(zahl){
    if(zahl % 10 === 0){
        console.log("Gerade 10!");
    }

    // Eine funkton braucht kein return
    // Ohne return wird nichts aus der Funktion (dem Zimmer) mit nach draußen genommen
}

consoleLogFallDurch10Teilbar(1);
consoleLogFallDurch10Teilbar(2);
consoleLogFallDurch10Teilbar(32);
consoleLogFallDurch10Teilbar(10);
consoleLogFallDurch10Teilbar(30);
consoleLogFallDurch10Teilbar(9000);

// 5b:

for(let i = 1; i <= 125; i++){
    console.log(i);
    consoleLogFallDurch10Teilbar(i);
}

// 6: Schreibe eine Pfeilfunktion, die 5 Zahlen als Parameter nimmt und die größte Zahl zurückgibt

function groessteZahl(z1,z2,z3,z4,z5){
    return Math.max(z1,z2,z3,z4,z5);
}

console.log(groessteZahl(1,4,4,7,20));

// Und die Funktion als Arrow Function

const groessteZahl2 = (z1,z2,z3,z4,z5) => {
    return Math.max(z1,z2,z3,z4,z5);
};

console.log(groessteZahl2(1,4,4,7,20));

// 7: Schreibe eine Pfeilfunktion, die einen Parameter nimmt und true zurückgibt, wenn dieser Parameter eine Zeichenkette ist

function istString(zuTesten){
    if(typeof zuTesten === "string") return true;
    return false;
}

console.log(istString("hallo"), "hallo");
console.log(istString(23), 23);

// istString als Arrow Function

const istString2 = (zuTesten) => {
    return typeof zuTesten === "string" ? true : false;
}


console.log(istString2("hallo"), "hallo");
console.log(istString2(23), 23);

// 8: Schreibe eine Pfeilfunktion, die zwei Parameter nimmt und `true` zurückgibt, wenn beide eine Zeichenkette sind

function sindBeideVomTypString(a, b){
    return typeof a === "string" && typeof b === "string";
}

console.log(sindBeideVomTypString("hallo", "welt"));
console.log(sindBeideVomTypString("hallo", 23));

// 9: Schreibe eine Pfeilfunktion, die eine Zeichenkette nimmt. Die Funktion soll das erste Wort der Zeichenkette zurückgeben, die ihr übergeben wurde. Beispiele:
    // getFirstWord("Internetting is hard") --> "Internetting"
    // getFirstWord("Hello World") --> "Hello"
    // getFirstWord("Hello") --> "Hello"

const gibErstesWortZurueck = (zeichenkette) => {
    const worte = zeichenkette.split(" ");
    return worte[0];
}

console.log(gibErstesWortZurueck("Internetting is hard"));
console.log(gibErstesWortZurueck("Hello World"));
console.log(gibErstesWortZurueck("Hello"));

// und jetzt als super kurse Arrow Function

const gibErstesWortZurueck2 = (zeichenkette) =>  zeichenkette.split(" ")[0];


console.log(gibErstesWortZurueck2("Internetting is hard"));
console.log(gibErstesWortZurueck2("Hello World"));
console.log(gibErstesWortZurueck2("Hello"));

// Array zu string
const einPaarWorte = ["Hallo", "du", "da"];
const arrayzuString = einPaarWorte.join(" XXX ");
console.log(arrayzuString);


// 10: Schwierig* Schreibe eine Pfeilfunktion, die eine Zeichenkette als Paramter nimmt.
 //Die Funktion soll eine neue Zeichenkette zurückgeben, bei der jedes Wort der Zeichenkette um die Anzahl ///der Wörter der Zeichenkette wiederholt wird. Beispiele:
 //- wordRepeater("bunny") --> "bunny"
 //- wordRepeater("Cat food") --> "Cat Cat food food"
 //- wordRepeater("I am groot") --> "I I I am am am groot groot groot"
 //- wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"

 const wordRepeat = (string) => {
     const worte = string.split(" ");
     let returnable = "";
     for(let i = 0; i < worte.length; i++){
         returnable += worte[i].repeat(worte.length);
     }
     return returnable;
 }

 console.log(wordRepeat("bunny"));
 console.log(wordRepeat("Cat food"));
 console.log(wordRepeat("I am groot"));
 console.log(wordRepeat("O M G ?"));

 // 11: chreibe eine kurze (einzeilige) Pfeilfunktion, die eine Zeichenkette nimmt und das erste Zeichen dieser Zeichenkette zurückgibt. Beispiele

 const firstLetter = (a) => {
     return a[0];
 }

 console.log(firstLetter("cat"));
 console.log(firstLetter("quylthulg"));

 // 12: Schreibe eine Pfeilfunktion, die eine Zeichenkette nimmt und eine neue Zeichenkette zurückgibt. Die neue Zeichenkette muss aus dem ersten Buchstaben jedes Wortes in der Eingabe gebildet werden. Beispiele:

 const firstLetters = (wort) => {
    let wortZuArray = wort.split(" ");
    let leer = "";
    for(let i = 0; i < wortZuArray.length; i++){
        b = wortZuArray[i];
        c = b[0];
        leer += c;
    }
    return leer;
 }
console.log(firstLetters("cat"));
console.log(firstLetters("What the fruit"));
console.log(firstLetters("MongoDB Express Node React"));
console.log(firstLetters("What You See Is What You Get"));

// 13: Schreibe eine Pfeilfunktion, die eine mit einer Variable als Argument gerufen wird (ein Parameter nimmt). Wenn diese Variable eine Zeichenkette ist, gibt sie die Länge der Zeichenkette zurück. Wenn die Variable ein Array ist, gibt sie die Länge des Arrays zurück. Wenn es sich um etwas anderes handelt, wird `null` zurückgegeben. Du musst vielleicht in Google suchen, um herauszufinden, wie du feststellen kannst, ob der Parameter ein Array ist - aber es gibt auch andere Möglichkeiten, dieses Problem zu lösen!

const ueben = (probier) => {
    if(typeof probier === 'string'){
        console.log(probier.length);
    }else if(typeof probier === 'object'){
        console.log(probier.length);
    }else{
        console.log(null);
    }
return
}

ueben(25);
ueben("hello my world");
ueben([1,2,3,4,5,"klasse"]);

// 14: Schreibe eine Pfeilfunktion, die eine Variable aufnimmt. Wenn die Variable kein String ist, gib null zurück. Wenn es eine Zeichenkette ist, gib ein Array zurück, in dem jedes Zeichen der Zeichenkette in einem einzelnen Array-Eintrag enthalten ist. Beispiele:
    //- arr("Cat") --> ["C", "a", "t"]
    //- arr(41) --> null
    //- arr("") --> []
    //- arr("R & D") --> ["R", " ", "&", " ", "D"]


    const explod = (word) => {
        if(typeof word === 'string'){
            console.log(word.split(""));
        }else {
            console.log(null);
        }
        return
    }
    explod("Cat");
    explod(41);
    explod("R & D")


// 15:   Reverse Engineering Herausforderung 1. Schreibe eine Funktion, die dies tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    //- foo("") -> false
    //- foo("a") -> false
    //- foo("o") -> true
    //- foo("Cat") -> false
    //- foo("Tomato") -> true
    //- foo("Potato") -> true
    //- foo("Blanket") -> false
    //- foo("1") -> false

    const foo = (word) => {
        if (word.includes("o") === true) {
            return true
        } else {
            return false
        }
    }
    console.log(foo(""));
    console.log(foo("a"));
    console.log(foo("o"));
    console.log(foo("Cat"));
    console.log(foo("Tomato"));
    console.log(foo("Potato"));
    console.log(foo("Blanket"));
    console.log(foo("1"));


// 16:     Reverse-Engineering-Aufgabe 2. Schreibe eine Funktion, die dies tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    //- bar("") --> "Cat"
    //- bar("x") --> "Cat"
    //- bar("Cat") --> "Catt"
    //- bar("Foobar") --> "Catobar"
    //- bar("Potato") --> "Cattato"
    //- bar("Tomato") --> "Catmato"
    //- bar("International Space Station") --> "Catternational Space Station"

    const bar = (wort) => {
        return "Cat" + wort.slice(2, (wort.length))
    }
    console.log(bar(""));
    console.log(bar("x"));
    console.log(bar("Cat"));
    console.log(bar("Foobar"));
    console.log(bar("Potato"));
    console.log(bar("Tomato"));
    console.log(bar("International Space Station"));