// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!isValidAlphabet(alphabet)){
      return false;
    }
    const encodingMap = {};
    const decodingMap = {};
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    input = input.toLowerCase();
    let result = "";

    for(let char of standardAlphabet){
      encodingMap[char] = alphabet[standardAlphabet.indexOf(char)];
      decodingMap[alphabet[standardAlphabet.indexOf(char)]] = char;
    }
    for(let char of input){
      if (char === " "){
        result += " ";
      } else {
        result += encode ? encodingMap[char] : decodingMap[char];
      }
    }

    return result;
  }
  function isValidAlphabet(alphabet){
    if(typeof alphabet !== 'string' || alphabet.length !== 26){
      return false;
    }
    const uniqueChars = new Set(alphabet);
    return uniqueChars.size === alphabet.length;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
