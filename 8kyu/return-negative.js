// ❓DESCRIPTION
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// 🏓 TESTS
// Test.assertEquals(makeNegative(42), -42);


// ✅SOLUTION
function makeNegative(num) {
    if (num >= 0) {
        return num = num * -1
    } else {
        return num = num
    }
}
console.log(makeNegative(42));
