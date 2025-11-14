// ❓DESCRIPTION
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//   Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// 🏓 TESTS
// tester('xo', true);
// tester('XO', true);
// tester('xxxoo', false);
// tester("xxOo", true);
// tester('', true, 'Empty string contains equal amount of x and o');

// ✅SOLUTION
function XO(str) {
  const lower = str.toLowerCase()
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === 'o') {
      countO ++
    } else if (lower[i] === 'x') {
      countX ++
    }
  }
  return countX === countO
}

console.log(XO('xo0'))