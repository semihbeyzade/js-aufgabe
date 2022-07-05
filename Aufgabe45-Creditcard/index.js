function validateCreditCard(creditCardNum) {
    if (creditCardNum.toString().length < 16 || creditCardNum.toString().length > 16) {
        console.log(`valid: false, ${creditCardNum}, error: wrong_length`);
    } else if (creditCardNum % 10 === 1 || creditCardNum % 10 === 3 || creditCardNum % 10 === 5 || creditCardNum % 10 === 7 || creditCardNum % 10 === 9) {
        console.log(`valid: false, ${creditCardNum}, error: odd final number`);
    } else if (parseInt(creditCardNum.toString()[0]) + parseInt(creditCardNum.toString()[1]) + parseInt(creditCardNum.toString()[2]) + parseInt(creditCardNum.toString()[3]) + parseInt(creditCardNum.toString()[4]) + parseInt(creditCardNum.toString()[5]) + parseInt(creditCardNum.toString()[6]) + parseInt(creditCardNum.toString()[7]) + parseInt(creditCardNum.toString()[8]) + parseInt(creditCardNum.toString()[9]) + parseInt(creditCardNum.toString()[10]) + parseInt(creditCardNum.toString()[11]) + parseInt(creditCardNum.toString()[12]) + parseInt(creditCardNum.toString()[13]) + parseInt(creditCardNum.toString()[14]) + parseInt(creditCardNum.toString()[15]) < 16) {
        console.log(`valid: false, ${creditCardNum}, error: sum less than 16`);
    } else if (creditCardNum.toString()[0] === creditCardNum.toString()[1] && creditCardNum.toString()[1] === creditCardNum.toString()[2] && creditCardNum.toString()[2] === creditCardNum.toString()[3] && creditCardNum.toString()[3] === creditCardNum.toString()[4] && creditCardNum.toString()[4] === creditCardNum.toString()[5] && creditCardNum.toString()[5] === creditCardNum.toString()[6] && creditCardNum.toString()[6] === creditCardNum.toString()[7] && creditCardNum.toString()[7] === creditCardNum.toString()[8] && creditCardNum.toString()[8] === creditCardNum.toString()[9] && creditCardNum.toString()[9] === creditCardNum.toString()[10] && creditCardNum.toString()[10] === creditCardNum.toString()[11] && creditCardNum.toString()[11] === creditCardNum.toString()[12] && creditCardNum.toString()[12] === creditCardNum.toString()[13] && creditCardNum.toString()[13] === creditCardNum.toString()[14] && creditCardNum.toString()[14] === creditCardNum.toString()[15]) {
        console.log(`valid: false, ${creditCardNum}, error: only one type of number`);
    } else {
        console.log(`valid: true, ${creditCardNum}`);
    }

};

validateCreditCard(6666666666666661);
validateCreditCard(1111111111111110);
validateCreditCard(4444444444444444);




/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }