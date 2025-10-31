// ❓DESCRIPTION
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If a number is a multiple of both 3 and 5, only count it once.
//   Courtesy of projecteuler.net (Problem 1)

// 🏓 TESTS


// ✅SOLUTION
function solution(number) {
  let result = []
  let value = []
  let sum = 0

  for (let i = 1; i < number; i++) {
    result.push(i)
  }

  for (let j = 0; j < result.length; j++) {
    if (result[j] % 3 === 0 ||  result[j] % 5 === 0)
      value.push(result[j])
  }

  for (let b = 0; b < value.length; b++) {
    sum +=value[b]
  }

return sum
}

console.log(solution(10))

//правильнее
// function solution(number) {
//   let sum = 0
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i
//     }
//   }
//   return sum
// }