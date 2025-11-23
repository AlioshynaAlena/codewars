// ❓DESCRIPTION
// Return the number (count) of vowels in the given string.
//   We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// 🏓 TESTS
// assert.strictEqual(getCount("abracadabra"), 5) ;


// ✅SOLUTION
function getCount(str) {
  let sum = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      sum += str[i]
    }
  }
return sum.length
}

console.log(getCount("abracadabra"))

