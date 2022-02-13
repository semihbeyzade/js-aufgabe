// 1

let variable = "Semih";
for(let i = 0 ; i < variable.length; i++){
    console.log(variable[i]);
}

// 2

let halbesWort = ''
for(let i = 0; i < variable.length; i +=2){
    halbesWort += variable[i]
}
    console.log(halbesWort);


// 3

for(let a = 1; a <= 4; a++){
    if(a >= 1 && a < 4){
        console.log(`Du bist ${a} Runde gelaufen`);
    }else if(a === 4){
        console.log("Toll gemacht!");
    }
}

// 4

for(let b = 0; b < 21; b++){
 if(b > 0 && b <= 9){
    console.log((Math.random() * b).toFixed(2));
 }else if(b < 7 && b > 5){
    console.log("aufhören") ;
    break;
 }
 
}

// 5

for(let c = 0; c <= 2022; c++){
    if(c === 1993){
        console.log(`Mein Geburtsjahr ist : ${c}`);
    }
}

// 6

for(let uhr = 0; uhr < 24; uhr++){
    for(let minute = 0; minute <= 60; minute++){
        if(minute < 10){
            console.log(`Es ist ${uhr}:0${minute}`);
        }else{
            console.log(`Es ist ${uhr}:${minute}`);
        }
    }
}

