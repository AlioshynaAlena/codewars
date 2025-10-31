// ❓DESCRIPTION
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//   For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
//   Happy Coding!

// 🏓 TESTS
// it("squareDigits(2112) should equal 4114", () => {
//   assert.strictEqual(squareDigits(2112), 4114);
// });



// ✅SOLUTION
function squareDigits(num){
  let str = num.toString()
  let value = ''

  for (let i = 0; i < str.length; i++) {
    value += str[i]*str[i]
  }
  return Number(value)
}

console.log(squareDigits(0))