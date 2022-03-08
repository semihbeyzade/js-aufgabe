const titel = (num) => {
  console.log(
    `============================Aufgabe(${num})====================================`
  );
};
// Aufgabe 1:
titel(1);
// führe den Code aus: Korrigiere den Fehler, damit du weiter arbeiten kannst!

// getSum (1,2)

const getSum = (a, b) => {
  return a + b;
};

console.log(getSum(1, 2));

// Aufgabe 2:

titel(2);

// Beispiel 1
const myObject = {
  name: "Lahle",
  beruf: "Musikerin",
  vorstellen: function () {
    return `Hi ich bin ${this.name} und ich bin ${this.beruf}`;
  },
};

console.log(myObject.vorstellen());
// Beispiel 2:
const myObjectArrow = {
  name: "Lahle",
  beruf: "Musikerin",
  vorstellen: () => {
    return `Hi ich bin ${this.name} und ich bin ${this.beruf}`;
  },
};

console.log(myObjectArrow.vorstellen());

// Aufgabe 3: Callback funktionen
titel(3);
let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
//3.1
titel(3.1);

const callbackMap = (num) => {
  return num * 2
}

let map = array.map(callbackMap);
console.log('callback map', map);

// Map: schreibe folgende Code, so dass map nicht mehr  eine anonyme Funktion als Callback verwendet:

const multipliedArray = array.map((number) => {
  return number * 2;
});

console.log(multipliedArray);

// Filter: schreibe folgende Code, so dass filter nicht mehr eine anonyme Funktion  als Callback verwendet:
const callbackFilter = (num) => {
  return num % 2 === 0 ? num : undefined;
};

let filter = array.filter(callbackFilter);
console.log('callback filter', filter);

let filteredArray = array.filter((number) => {
  return number % 2 === 0 ? number : undefined;
});

console.log(filteredArray);

// Reduce: schreibe folgende Code, so dass reduce nicht mehr eine anonyme Funktion als Callback verwendet:
const callbackReduce = (a, b) => {
  return a + b;
};
let reduce = array.reduce(callbackReduce);
console.log('callback reduce', reduce);

let summe = array.reduce((a, b) => {
  return a + b;
}, 0);
console.log(summe);

// 3.2
titel(3.2);

// verwende setTimeout um folgende Funktion 3 sekunden zu verzögern.

const rufMichSpaeter = () => {
  console.log("Dieser Text siehst du erst in 3 sekunden ");
};

const versuch = (callfunks) => {
  setTimeout(() => {
    callfunks();
  }, 3000);
};
versuch(rufMichSpaeter);
// 4: Füge dein Code hier ein:
titel(4);

function vieViele(params) {
  console.log(arguments.length);
}

vieViele("hallo", "tschüss");

