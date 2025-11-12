// ❓DESCRIPTION
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.



// 🏓 TESTS
// tester("Dermatoglyphics", true );
// tester("isogram", true );
// tester("aba", false);


// ✅SOLUTION
function isIsogram(str){
  let lower = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    let char = lower[i]
    if (lower.indexOf(char) !== i) {
      return false
    }
  }
  return true
}

console.log(isIsogram('isogram'))
