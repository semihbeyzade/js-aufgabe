// 1

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const newNumbers = arrayOfNumbers.map((e) => {
    return e = e + 1;
})

console.log(newNumbers);

// 2

const filterEvens = (arr) => {
    return arr.filter((e) => {
        if (e % 2 === 0) return e
    })
}

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));


// 3

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (friends, str) => {
    return friends.filter((e) => {
        if (e.includes(str) === true) return e
    })
}

console.log(filterItems(friends, 'ka'));

console.log(filterItems(friends, 'e'));

// 4

const sum = (arr) => {
    return arr.reduce((a, b) => {
        return a + b
    }, 0)
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

// 5

const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

function totalSum(arr) {
    let sum = 0;
    for (let key of arr) {
        sum += key.amount;

    }
    return sum;
}
console.log(totalSum(orders));





// 6

const getSquareRoot = (arr) => {
    return arr.map((e) => {
        return e = Math.sqrt(e).toFixed(2);
    })
}

console.log(getSquareRoot([2, 4, 5, 6]));