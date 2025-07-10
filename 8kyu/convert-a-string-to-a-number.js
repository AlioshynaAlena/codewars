// ❓DESCRIPTION
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


// 🏓 TESTS
// Test.assertEquals(stringToNumber("1234"), 1234)
// Test.assertEquals(stringToNumber("605"), 605)
// Test.assertEquals(stringToNumber("1405"), 1405)
// Test.assertEquals(stringToNumber("-7"), -7)



// ✅SOLUTION
const stringToNumber = function(str) {
    return Number(str)
}

console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));
console.log(stringToNumber("77"));
