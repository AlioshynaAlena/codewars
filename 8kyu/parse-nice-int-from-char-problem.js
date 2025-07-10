// ❓DESCRIPTION
// You ask a small girl, "How old are you?"
// She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl 's age (0-9) as an integer.
// Assume the test input string is always a valid string.For example, the test input may be "1 year old"
// or "5 years old".The first character in the string is always a number.

// Вы спрашиваете маленькую девочку: "Сколько тебе лет?". Она всегда отвечает: "Х лет", где х - случайное число от 0 до 9.

// Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.

// Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовый ввод может быть "1 год" или "5 лет". Первый символ в строке всегда является числом.


// 🏓 TESTS
//  assert.strictEqual(getAge("4 years old"), 4);
//     assert.strictEqual(getAge("9 years old"), 9);
//     assert.strictEqual(getAge("1 year old"), 1); 



// ✅SOLUTION
function getAge(inputString) {
    return Number(inputString.split(' ').slice(0, 1).join(''))
}

console.log(getAge("4 years old"));
console.log(getAge("9 years old"));
console.log(getAge("1 year old"));
