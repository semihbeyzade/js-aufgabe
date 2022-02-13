// 1

let zahl = 10;
let zweiteZahl = 55;
if((50 < zahl && zahl < 99) || (50 < zweiteZahl && zweiteZahl < 99)){
    console.log(true);
}else{
    console.log(false);
}

// 2

let zahl1 = 10;
let zahl2 = 20;
let zahl3 = 55;

if( (50 <= zahl1 && zahl1 <= 99) || (50 <= zahl2 && zahl2 <= 99) || (50 <= zahl3 && zahl3 <= 99)){
    console.log(true);

}
else{
    console.log(false);
}

// 3

let a = 15;
let b = 30;
let c = 45;

let maxWerte = Math.max(a,b,c);

if(maxWerte === a){
    console.log("a");
}else if(maxWerte === b){
    console.log("b");
}else{
    console.log("c");
}

// 4

let zeichenkette = "Python";
if(zeichenkette.substring(0,2) == "Py"){
    console.log(zeichenkette);
}else{
    console.log(`${zeichenkette} hat kein Py`);
}

zeichenkette = "yramid";
if(zeichenkette[0] == "P" && zeichenkette[1]== "y"){
    console.log(zeichenkette);
}else{
    console.log(`${zeichenkette} hat kein Py`);
}

// 5

let x = 35;
let y =  19;
let summe = x + y;

if(summe >50 && summe < 80){
    console.log(65);
}else{
    console.log(80);
}


// 6

let werte1 = 3;
let werte2 = 11;

summe2= werte1 + werte2;
difference = werte1 - werte2;

if((summe2 === 8) || (Math.abs(difference) === 8)){
    console.log(true);
}else{
    console.log(false);
}

// 7

nummer1 = 15;
nummer2 = 5;
summe3 = nummer1 + nummer2;

if(nummer1 === 15 || nummer2 === 15 || summe3 ===15){
    console.log(true);
}else{
    console.log(false);
}

// 8

let zahl4 = 5;
let zahl5 =12;

if((zahl4 % 7 == 0 || zahl4 % 11 == 0) || (zahl5 % 7 == 0 || zahl5 % 11 == 0)){
    console.log(true);
}
else{
    console.log(false);
}

// 9

value1 = 7;
value2 = 7;
total = value1 + value2;

if(value1 === value2){
    console.log(total * 3);
}else{
    console.log(false);
}

// 10

value3 = 81;
difference1 = (value3 - 19);

let doppelte = difference1 * 2;

if(difference1 > 19){
    console.log(Math.abs(doppelte));
}else{
    console.log("Difference ist kleiner als 19");
}


// 11



let firstName = "Semih";
let age = 28;
if(age < 13){
    console.log("firstName is a child");
}
else if(age >= 13 && age < 20){
    console.log("Vorname ist ein Teenager");
}
else if(age >= 20 && age < 30){
    console.log("Vorname ist ein junger Erwachsener");
}
else{
    console.log("Vorname ist ein Erwachsener");
}   




