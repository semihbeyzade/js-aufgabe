const rewire = require("rewire");
const fs = require("fs");
const content = fs
    .readFileSync("./index.js")
    .toString("utf-8")
    .replace(/ ()/g, "");
const solution = rewire("../index");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe('1. isFourLetters', () => {
    it('Should take an array of strings. Return all the words in that array that are exactly four letters.', () => {
        const isFourLetters = solution.__get__("isFourLetters");
        const arr = ["John", "James", "Jack", "Jeanne", "Jean", "many", 'manuel'];
        const fourLetterWords = arr.filter(word => word.length === 4);
        expect(isFourLetters(arr)).toEqual(fourLetterWords);
    })
})

describe('2. Month', () => {
    it('Should take a number (from 1 to 12) and return its corresponding month name as a string.', () => {
        const getMonthName = solution.__get__("getMonthName");
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for (let i = 1; i <= 12; i++) {
            expect(getMonthName(i)).toBe(months[i - 1]);
            expect(getMonthName(8)).toBe("August");
        }
    })
})

describe(' 3. amplifyMultiplesOfFour', () => {
    it('takes an integer and returns an array of integers ascending from 1 to the given number', () => {
        const amplifyMultiplesOfFour = solution.__get__("amplifyMultiplesOfFour");
        //Include the given number (the number in the parameters).
        expect(amplifyMultiplesOfFour(25)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]);

        expect(amplifyMultiplesOfFour(3)).toEqual([1, 2, 3]);
        //The given integer will always be equal to or greater than 1.
        expect(amplifyMultiplesOfFour(1)).toEqual([1]);
    })
})

describe(' 4. One is not like the others', () => {
    test("takes an array of numbers and returns the number that's unique.", () => {
        const unique = solution.__get__("unique");
        expect(unique([0, 0, 0.77, 0, 0])).toBe(0.77);
    })
})

describe('5. wordRank', () => {
    it('takes a string of words and returns the highest scoring word.', () => {
        const wordRank = solution.__get__("wordRank");
        expect(wordRank("The quick brown fox")).toBe("brown");
    })
})

describe('6. c4n y0u r34d th15?', () => {
    test('takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string', () => {
        const encode = solution.__get__("code");
        expect(encode("javascript is cool")).toBe("j4v45cr1pt 15 c00l");
        expect(encode("programming is fun")).toBe("pr0gr4mm1ng 15 fun");
        expect(encode("become a coder")).toBe("b3c0m3 4 c0d3r");

    })
}) 
