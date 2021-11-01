const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  const results = {};

  for (let c of string) {
    if (c !== ' ') {
      if (results[c] && c !== ' ') {
        results[c] += 1;
      } else {
        results[c] = 1;
      }
    }
  }

  return results;
};

assertEqual(countLetters("hello").l, 2);
console.log(countLetters("hello"));
