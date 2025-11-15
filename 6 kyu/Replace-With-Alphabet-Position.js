// ❓DESCRIPTION
// Welcome.
//   In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//   If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
//   Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12


// 🏓 TESTS
// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");


// ✅SOLUTION
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return code - 64;
      }
      return null;
    })
    .filter(pos => pos !== null)
    .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve oclock"))