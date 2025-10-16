// ❓DESCRIPTION
// Write a function that accepts a non - negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// 🏓 TESTS
// assert.strictEqual(repeatStr(3, "*"), "***");
// assert.strictEqual(repeatStr(5, "#"), "#####");
// assert.strictEqual(repeatStr(2, "ha "), "ha ha ");

// ✅SOLUTION
function repeatStr(n, s) {
    return s.repeat(n)
}

console.log(repeatStr(2, "ha "));
