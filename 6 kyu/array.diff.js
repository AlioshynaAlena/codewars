// ❓DESCRIPTION
// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
//   Examples
// If a = [1, 2] and b = [1], the result should be [2].
//   If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

// 🏓 TESTS
// assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");


// ✅SOLUTION
function arrayDiff(a, b) {
  let arr = []
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      arr.push(a[i])
    }
  }
  return arr
}

console.log(arrayDiff([1, 2], [1]))