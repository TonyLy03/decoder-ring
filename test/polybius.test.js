// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius test", () => {
    describe("encoding", () => {
        it("should encode each letter with 2 digits", () => {
            const message = "jingle";
            const actual = polybius(message);
            const expected = "424233221351";

            expect(actual).to.equal(expected);
        });
        it("should translate i and j to 42", () => {
            const message = "jingle";
            const actual = polybius(message);
            const expected = "424233221351";

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "JINGLE";
            const actual = polybius(message);
            const expected = "424233221351";

            expect(actual).to.equal(expected);
        });
        it("should maintain space", () => {
            const message = "jingle bell";
            const actual = polybius(message);
            const expected = "424233221351 21511313";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should translate each number pair into a letter", () => {
            const message = "23513434112251";
            const actual = polybius(message, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });
        it("should translate 42 to both i and j", () => {
            const message = "424233221351";
            const actual = polybius(message, false);

            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("should maintain spaces", () => {
            const message = "44324234 4234 2345 23513434112251";
            const actual = polybius(message, false);
            const expected = "th(i/j)s (i/j)s my message";

            expect(actual).to.equal(expected);
        });
    });
});