// ❓DESCRIPTION
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// 🏓 TESTS
// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');

// ✅SOLUTION
function removeChar(str) {
    return str.slice(1, -1)
};
console.log(removeChar('eloquent'));
