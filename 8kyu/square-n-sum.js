// ❓DESCRIPTION
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because

// 🏓 TESTS
// assert.strictEqual(squareSum([1, 2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

// ✅SOLUTION
function squareSum(numbers) {
    let array = [];
    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {
        array.push(numbers[index] * numbers[index]);
        sum += array[index]
    }
    return sum;
}

console.log(squareSum([0, 3, 4, 5]));
