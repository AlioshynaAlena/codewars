// ❓DESCRIPTION
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//   Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// 🏓 TESTS
// assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
// assert.strictEqual(highAndLow("1 2 3"), "3 1");


// ✅SOLUTION
function highAndLow(numbers){
const arr = numbers.split(' ').map(Number)
  let max = arr[0]
  let min = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if(arr[i] < min) min = arr[i]
  }
  return `${max} ${min}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))