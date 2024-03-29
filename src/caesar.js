// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift < -25 || shift > 25){
      return false;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    let result = "";
    for (let i = 0; i < input.length; i++){
      const currentChar = input[i];
      if (!alphabet.includes(currentChar)){
        result += currentChar;
        continue;
      }
      const currentIndex = alphabet.indexOf(currentChar);

      let newIndex;
      if(encode){
        newIndex = (currentIndex + shift) % 26;
      } else {
        newIndex = (currentIndex - shift) % 26;
      }

      if (newIndex < 0){
        newIndex += 26;
      }

      result += alphabet[newIndex];
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
