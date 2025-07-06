// ❓DESCRIPTION
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


// Вам будет дана непустая строка. Ваша задача - вернуть средний символ (символы) строки.

// Если длина строки нечетная, верните средний символ.
// Если длина строки четная, верните 2 средних символа.
// Примеры:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A".

// 🏓 TESTS
// it("Sample Tests", function() {
//         doTest("test", "es");
//         doTest("testing", "t");
//         doTest("middle", "dd");
//         doTest("A", "A");
//     });


// ✅SOLUTION
function getMiddle(s) {
    const middle = Math.floor(s.length / 2)
    if (s.length % 2 !== 0) {
        return s[middle] //берем символ по индексу!!!
    } else {
        return s.slice(middle - 1, middle + 1) //т.е. индексы от 1 до 3 не вкл
    }
}
console.log(getMiddle("test"));
