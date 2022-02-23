// 1
function exponentialWerte(zahl1,zahl2){
    for(let i = 1; i <= zahl2; i++){
       console.log(zahl1 ** i);
    }
    return
}

exponentialWerte(3,5);
exponentialWerte(2,8);

// 2

function printFavoriteFruit(){
  console.log('Meine Lieblinsfrucht ist', x);

}

let x = "granatapfel";
printFavoriteFruit();


// 3

function exponent(num1,num2){
    const sagHello = "Hello";
    for(let i = 1; i <= num2; i++){
      let result = num1 ** i;
      console.log(result);
    }
    return
}

exponent(3,5)

let result = exponent(2,4);


/*

Wenn wir unser variable in function scope erstellen, gilt es nur in function scope. Wir können außerhalb function scope wieder variable mit gleichem namen erstellen. Global-scope und function-scope sind zwei verschiedene Bereich in unserem Rechner

*/




