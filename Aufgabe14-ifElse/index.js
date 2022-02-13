let zahl = 9;

if(zahl % 15 == 0){
    console.log("FizzBuzz");
}
else if (zahl % 5 == 0){
    console.log("Buzz")
}
else if (zahl % 3 == 0){
    console.log("Fizz");
}
else{
    console.log("werte wurde nicht gefunden");
}

console.log();
console.log("-------------------");
console.log();

let number = [6,18,13,9,26,35,40,2,99,707];

for(let i = 0; i < number.length; i++){
    if(number[i] % 15 === 0){
        console.log("FizzBuzz", number[i]);
    }else if(number[i] % 5 === 0){
        console.log("Buzz", number[i]);
    }else if(number[i] % 3 === 0){
        console.log("Fizz", number[i]);
    }
}