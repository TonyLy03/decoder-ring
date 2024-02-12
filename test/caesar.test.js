// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar shift test", () => {
    describe("error handling", () => {
        it("should return false if shift equals 0", () => {
            const message = "caesar shift";
            const shift = 0;
            const actual = caesar(message, shift);
            
            expect(actual).to.be.false;
        });
        it("should return false if shift is less than -25", () => {
            const message = "caesar shift";
            const shift = -26;
            const actual = caesar(message, shift);
            
            expect(actual).to.be.false;
        });
        it("should return false if shift is greater than 25", () => {
            const message = "caesar shift";
            const shift = 26;
            const actual = caesar(message, shift);
            
            expect(actual).to.be.false;
        });
    });
    describe("encoding", () => {
        it("should shift to the right", () => {
            const message = "caesar shift";
            const shift = 5;
            const actual = caesar(message, shift);
            const expected = "hfjxfw xmnky"

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "CAESaR ShiFT";
            const shift = 5;
            const actual = caesar(message, shift);
            const expected = "hfjxfw xmnky"

            expect(actual).to.equal(expected);
        });
        it("should handle shifts that go past the end of the alphabet", () => {
            const message = "Zombie zoomed to the zoo";
            const shift = 5;
            const actual = caesar(message, shift);
            const expected = "etrgnj ettrji yt ymj ett"
            
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces and nonalphabetic symbols in the message", () => {
            const message = "Zomb1e z00med to th3 zoo &@$!#.";
            const shift = 5;
            const actual = caesar(message, shift);
            const expected = "etrg1j e00rji yt ym3 ett &@$!#."
            
            expect(actual).to.equal(expected);
        });
        it("should allow negative shifts that shift to the left", () => {
            const message = "Zomb1e z00med to th3 zoo &@$!#.";
            const shift = -5;
            const actual = caesar(message, shift);
            const expected = "ujhw1z u00hzy oj oc3 ujj &@$!#."
            
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should shift to the left", () => {
            const message = "HFJXFW XMNKY";
            const shift = 5;
            const actual = caesar(message, shift, false);
            const expected = "caesar shift"
            
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "HFJXFW XMNKY";
            const shift = 5;
            const actual = caesar(message, shift, false);
            const expected = "caesar shift"
            
            expect(actual).to.equal(expected);
        });
        it("should maintain space and other nonalphabetic symbols in the message", () => {
            const message = "h@jxfw xm1ky!";
            const shift = 5;
            const actual = caesar(message, shift, false);
            const expected = "c@esar sh1ft!"
            
            expect(actual).to.equal(expected);
        });
        it("should handle the ends of the alphabet", () => {
            const message = "enu efu";
            const shift = 5;
            const actual = caesar(message, shift, false);
            const expected = "zip zap"
            
            expect(actual).to.equal(expected);
        });
        it("should shift to the right for negative shift", () => {
            const message = "udk uvk";
            const shift = -5;
            const actual = caesar(message, shift, false);
            const expected = "zip zap"
            
            expect(actual).to.equal(expected);
        });
    });
});