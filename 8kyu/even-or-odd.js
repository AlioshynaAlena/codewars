// ❓DESCRIPTION
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// 🏓 TESTS
// it("2 is even", () => {
//     assert.strictEqual(evenOrOdd(2), "Even");
//   });
//   it("7 is odd", () => {
//     assert.strictEqual(evenOrOdd(7), "Odd");



// ✅SOLUTION
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

console.log(evenOrOdd(6));
