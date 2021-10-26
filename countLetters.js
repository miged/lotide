const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};

  for (let c of string) {
    if (results[c]) {
      results[c] += 1;
    } else {
      results[c] = 1;
    }
  }

  return results;
};

console.log(countLetters("hello"));
