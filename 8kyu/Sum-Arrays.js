// ❓DESCRIPTION
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.




// 🏓 TESTS
// Test.assertEquals(sum([]), 0);
// Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);



// ✅SOLUTION
function sum (numbers) {
  let result = 0
  numbers.forEach(num => result += num)
  return result
}

console.log(sum([]))