// ❓DESCRIPTION
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//   The output should be two capital letters with a dot separating them.
//   It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// 🏓 TESTS
// assert.strictEqual(abbrevName("Sam Harris"), "S.H");
// assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
// assert.strictEqual(abbrevName("Evan Cole"), "E.C");
// assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
// assert.strictEqual(abbrevName("David Mendieta"), "D.M");



// ✅SOLUTION

function abbrevName(name){
  const oneValue = name.split(' ')[0].slice(0,1).toUpperCase()
  const twoValue = name.split(' ')[1].slice(0,1).toUpperCase()
  const result = `${oneValue}.${twoValue}`

  return result
}

console.log(abbrevName("Evan cole"))