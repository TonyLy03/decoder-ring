// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet = {
      a: '11', b: '21', c: '31', d: '41', e: '51',
      f: '12', g: '22', h: '32', i: '42', j: '42',
      k: '52', l: '13', m: '23', n: '33', o: '43',
      p: '53', q: '14', r: '24', s: '34', t: '44',
      u: '54', v: '15', w: '25', x: '35', y: '45', z: '55',
    };

    input = input.toLowerCase();

    let result = '';
    if (encode){
      for(let char of input){
        if(char === ' '){
          result += ' ';
        } else if(char === 'i' || char === 'j'){
          result += '42';
        } else {
          result += alphabet[char] || char;
        }
      }
    } else{
      if (input.replace(/ /g, '').length % 2 !== 0){
        return false;
      }
      while (input.length > 0){
        if (input[0] === ' '){
          result += ' ';
          input = input.slice(1);
          continue;
        }
        const pair = input.slice(0, 2);
        input = input.slice(2);

        if(pair === '42'){
          result += '(i/j)';
        } else{
          for (const letter in alphabet){
            if(alphabet[letter] === pair){
              result += letter;
            }
          }
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
