// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution cipher", () => {
    describe("error handling", () => {
        it("should return false if missing substitution alphabet", () => {
            const message = "substitution cipher";
            const actual = substitution(message);
            expect(actual).to.be.false;
        });
        it("should return false if substitution alphabet isn't exactly 26 characters long", () => {
            const message = "substitution cipher";
            const alphabet = "Not26Long"
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
        it("should return false if each character in substitution alphabet isn't unique", () => {
            const message = "substitution cipher";
            const alphabet = "abcdefabcdefabcdefabcdefab"
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("encoding", () => {
        it("should translate correctly with any key using unique characters", () => {
            const message = "substitution";
            const alphabet = "1a2b3c4d5e6f7g8h9i0j!k@l#m"
            const actual = substitution(message, alphabet);
            const expected = "0!a0j5j!j58g";
            
            expect(actual).to.equal(expected);
        });
        it("should maintain space", () => {
            const message = "substitution cipher";
            const alphabet = "1a2b3c4d5e6f7g8h9i0j!k@l#m"
            const actual = substitution(message, alphabet);
            const expected = "0!a0j5j!j58g 25hd3i";
            
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "SUBstiTUTion cipHER";
            const alphabet = "1a2b3c4d5e6f7g8h9i0j!k@l#m"
            const actual = substitution(message, alphabet);
            const expected = "0!a0j5j!j58g 25hd3i";
            
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should translate correctly with any key using unique characters", () => {
            const message = "0!a0j5j!j58g";
            const alphabet = "1a2b3c4d5e6f7g8h9i0j!k@l#m"
            const actual = substitution(message, alphabet, false);
            const expected = "substitution";
            
            expect(actual).to.equal(expected);
        });
        it("should maintain space", () => {
            const message = "0!a0j5j!j58g 25hd3i";
            const alphabet = "1a2b3c4d5e6f7g8h9i0j!k@l#m"
            const actual = substitution(message, alphabet, false);
            const expected = "substitution cipher";
            
            expect(actual).to.equal(expected);
        });
    })
});