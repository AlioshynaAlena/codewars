// ❓DESCRIPTION
// Return the number (count) of vowels in the given string.
//   We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// 🏓 TESTS
// assert.strictEqual(getCount("abracadabra"), 5) ;


// ✅SOLUTION
function getCount(str) {
  let value = str.split('')
  let sum = []

  for (let i = 0; i < value.length; i++) {
    if (value[i] === 'a' || value[i] === 'e' || value[i] === 'i' || value[i] === 'o' || value[i] === 'u') {
      sum.push(value[i])
    }
  }
return sum.length
}

console.log(getCount("abracadabra"))


// 'a' || 'e' || 'i' || 'o' || 'u'