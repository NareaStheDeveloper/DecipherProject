// Write your tests here!
const { caesar } = require('../src/caesar');
const expect = require("chai").expect;


describe("caesar", () => {
    it("should change all letters to lowercase'", () => {
        const actual = caesar("THINKFUL", 3);
        const expected = "wklqnixo";
        expect(actual).to.eql(expected)
    })
    it("shift past the end of the alphabet ", () => {
        const actual = caesar("zebra", 3);
        const expected = "cheud";
        expect(actual).to.eql(expected)
    })
    it("keep all spaces when shifting", () => {
        const actual = caesar("thinkful team", 3);
        const expected = "wklqnixo whdp";
        expect(actual).to.eql(expected)
    })
    it("should encode to 'wklqnixo'", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.eql(expected)
    })
    it("should encode to 'qefkhcri'", () => {
        const actual = caesar("thinkful", -3);
        const expected = "qefkhcri";
        expect(actual).to.eql(expected)
    })
    it("should decode to 'thinkful'", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";
        expect(actual).to.eql(expected)
    })
    it("should encode to 'bpqa qa i amkzmb umaaiom!'", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected)
    })
    it("should decode to 'this is a secret message!'", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.eql(expected)
    })
    it("should return 'false' because of no shift value", () => {
        const actual = caesar("thinkful");
        expect(actual).to.eql(false)
    })
    it("should return 'false' because 99 > 25", () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.eql(false)
    })
    it("it should return 'false' because -26 < -25", () => {
        const actual = caesar("thinkful", -26);
        expect(actual).to.eql(false)
    })
})