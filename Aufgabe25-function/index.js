// 1

function aufsummieren(zahl){
    let sum = 0;
    for(let i = 1; i <= zahl; i++){
        sum += i
    }
  return sum;
}

console.log(aufsummieren(4));
console.log(aufsummieren(13));
console.log(aufsummieren(600));

// 2

const kubikSumme = (x = 0,y = 0,z = 0) => {
  let kubikX = Math.pow(x,3)
  let kubikY = Math.pow(y,3)
  let kubikZ = Math.pow(z,3)
  console.log(kubikX, kubikY, kubikZ);

  let summeKubik = kubikX + kubikY + kubikZ
  return summeKubik

}

let erg1 = kubikSumme(1,5,9)
console.log(erg1);
let erg2 = kubikSumme(5,2)
console.log(erg2);
let erg3= kubikSumme(2)
console.log(erg3);
let erg4 = kubikSumme()
console.log(erg4);



// 3

function beginntMit(str1, str2) {
    if(str1[0] === str2[0] || str1[0].toUpperCase() === str2[0].toUpperCase() || str1[0].toLowerCase() === str2[0].toLowerCase()) return true;
    return false;
};
console.log(beginntMit("Bu", "Buch"));
console.log(beginntMit("Tri", "Triceratops"));
console.log(beginntMit("Ende", "noch nicht am Ende"))


// 4

function istKleinerGleich(zahl) {
    return zahl <= 0;
}
console.log(istKleinerGleich(3));
console.log(istKleinerGleich(0));
console.log(istKleinerGleich(-4));
console.log(istKleinerGleich(10));


// 5

function wievieleZeichen(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter++;
        }
    }
    return counter;
}
console.log(wievieleZeichen("in dieser Zeichenkette", "i"));


// 6

function xHochX(zahl){
    return zahl ** zahl;
}

console.log(xHochX(5));
console.log(xHochX(10));
console.log(xHochX(3));


// 7

/*function istWalterHier(str){
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'Walter'.split('')){
            console.log(true);
        }else{
            console.log(false);
        }
    }
  return
}

istWalterHier("Ich habe Walter gefunden!"); */

// 8

function gleichVielXUndO(str) {
    const LowerCaseString = str.toLowerCase();
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (LowerCaseString[i] === "x") {
            countX++;
        } else if (LowerCaseString[i] === "o") {
            countO++;
        }
    }
    if ((countX === 0) && (countO === 0)) {
        return `${true}`;
    } else if (countX === countO) {
        return `${true}`;
    } else if (countX !== countO) {
        return `${false}`;
    }
}
console.log(gleichVielXUndO("ooxx"));
console.log(gleichVielXUndO("xooxx"));
console.log(gleichVielXUndO("ooxXm"));
console.log(gleichVielXUndO("zpzpzpp"));
console.log(gleichVielXUndO("zzoo"));

// 9

function istPrimZahl(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
console.log(istPrimZahl(7)); 
console.log(istPrimZahl(9)); 
console.log(istPrimZahl(10)); 


