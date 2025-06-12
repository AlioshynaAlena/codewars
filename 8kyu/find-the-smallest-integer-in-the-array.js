// ❓DESCRIPTION
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// В заданном массиве целых чисел ваше решение должно найти наименьшее целое число.
// Например:
// При задании [34, 15, 88, 2] ваше решение вернет 2
// При задании [34, -345, -1, 100] ваше решение вернет -345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

// 🏓 TESTS
//  assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
//     assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
//     assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);


// ✅SOLUTION

function findSmallestInt(arr) {
    let small = arr[0]
    for (let i = 1; i < arr.length; i++) {

        if (small > arr[i]) {
            small = arr[i]
        }
    }
    return small;
}
console.log(findSmallestInt([78, 56, 232, 12, 18]));
