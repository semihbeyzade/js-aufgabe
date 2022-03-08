const rewire = require("rewire");
const fs = require("fs");
const content = fs
    .readFileSync("./index.js")
    .toString("utf-8")
    .replace(/ ()/g, "");
const solution = rewire("../index.js");

describe("1. Total Amount", () => {
    it("should return total amount", () => {
        const totalAmount = solution.__get__("totalAmount");
        expect(totalAmount).toBe(1075);
    });

})

describe(' 2. ArrayOfNumbers', () => {
    it("Should increment each element by 1, and return a new Array", () => {
        const mappedArray = solution.__get__("mappedArray");
        expect(Array.isArray(mappedArray)).toBeTruthy()
        expect(mappedArray).toEqual([4, 46, 7, 57, 8, 10]);

    })
})

describe('3. Filter Evens', () => {
    it('Should return filtered Array of only Even Numbers', () => {
        const filterEvens = solution.__get__("filterEvens");
        expect(filterEvens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    })
})

describe('4. Friends', () => {
    it('Excepts an Array and Filters based on a search query', () => {
        const filterFriends = solution.__get__("filterFriends");
        const friends = ["rika", "jenna", "bleda", "oliver", "itamar",];
        expect(filterFriends(friends, "i")).toEqual(["rika", "oliver", "itamar"]);
    })
})

describe(' 5. Sum Up', () => {
    it('Should Return the sum of an Array of Numbers', () => {
        const sumUp = solution.__get__("sumUp");
        expect(sumUp([1, 2, 3])).toEqual(6);
    })
})

describe('6. Square Root', () => {
    it("Should return the Square root of each element in the Array", () => {
        const getSquareRoot = solution.__get__("getSquareRoot");
        expect(getSquareRoot([1, 2, 3])).toEqual([1, 1.4142135623730951, 1.7320508075688772]);
    })
})