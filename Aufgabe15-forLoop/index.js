// 1
let summe = 0;
for (let i = 0; i < 21; i++) {
    summe = summe + i;

}

console.log(`Summe : ${summe}`);

console.log();
console.log("++++++++++++++++++++++");
console.log();


// 2

for (let i = 1; i < 6; i++) {
    if (i <= 4) {
        console.log(i, "Es befindet sich 1 Bierflasche an der Wand.")
    } else {
        console.log(i, "Es befinden sich 2 Bierflaschen an der Wand")
    }
}

console.log();
console.log("++++++++++++++++++++++");
console.log();

// 3

for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i, "ist gerade");
    } else {
        console.log(i, "ist ungerade");
    }
}

console.log();
console.log("++++++++++++++++++++++");
console.log();

// 4


for (let i = 0; i <= 10; i++) {
    multiplikation = i * 9;
    console.log(`${i} * 9 = ${multiplikation}`);
}

console.log();
console.log("++++++++++++++++++++++");
console.log();

// 4 Bonus

for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(`${a} * ${b} = ${a * b}`);
    }

}




// 5


for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} ist FizzBuzz`);
    } else if (i % 5 === 0) {
        console.log(`${i} ist Buzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} ist Fizz`);
    }
}

console.log();
console.log("++++++++++++++++++++++");
console.log();


// 6


let total = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 15 === 0) {
        total = total + i;
    }
    console.log(total);

    console.log();
    console.log("++++++++++++++++++++++");
    console.log();

    // 7
    let array = [];
    for (let i = 1; i < 1001; i++) {
        if (i % 100 === 0) {
            array.push(i);
        }

    }
    console.log(array.join(" "));

    let array1 = [];
    for (let i = 0; i < 11; i += 2) {
        array1.push(i);

    }

    console.log(array1.join(" "));

    let array2 = [];
    for (let i = 3; i < 16; i += 3) {
        array2.push(i);

    }

    console.log(array2.join(" "));

    let array3 = [];
    for (let i = 9; i >= 0; i--) {
        array3.push(i);

    }
    console.log(array3.join(" "));


    let array5 = [];
    for (let count = 1; count <= 4; count++) {

        for (i = 0; i < 3; i++) {
            array5.push(count);
        }
    }

    console.log(array5.join(" "));


    let array6 = [];

    for (let count = 1; count <= 3; count++) {
        for (let i = 0; i <= 4; i++) {
            array6.push(i)
        }

    }

    console.log(array6.join(" "));

    console.log();
    console.log("++++++++++++++++++++++");
    console.log();

    // 8

    function isPalindrome(s) {
        return s == s.split("").reverse().join("");
      }
      
      console.log(isPalindrome("malayalam")); 
      console.log(isPalindrome("english")); 
      