// ❓DESCRIPTION
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

// 🏓 TESTS
// assert.deepEqual(digitize(35231),[1,3,2,5,3]);
// assert.deepEqual(digitize(0),[0]);


// ✅SOLUTION
function digitize(n) {
  // let array = []
  // let string = n.toString()
  //
  // for (let i = string.length- 1; i >= 0; i--) {
  //   array.push(Number(string[i]))
  // }
  // return array

 return  n.toString().split('').reverse().map(Number)
}

console.log(digitize(35231))