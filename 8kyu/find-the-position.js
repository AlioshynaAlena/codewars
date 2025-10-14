// ❓DESCRIPTION
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Output :: "Position of alphabet: 1"
// Note: Only lowercased English letters are tested


// Если указана буква, верните ее положение в алфавите.

// Ввод::"a"

// Вывод::"Позиция в алфавите: 1"

// Примечание: Проверяются только строчные английские буквы

// 🏓 TESTS
// assert.strictEqual(position("a"),"Position of alphabet: 1");
// assert.strictEqual(position("z"),"Position of alphabet: 26");
// assert.strictEqual(position("e"),"Position of alphabet: 5");



// ✅SOLUTION
function position(letter) {
    let value = letter.toLowerCase().charCodeAt(0) //charCodeAt(0) - возвращает ASCII код первого символа строки

    //Проверка что это английская буква
    if (value >= 97 && value <= 122) {
        //Вычисление позиции в алфавите('a' = 97: 97-1=96 первая позиция...)
        return `Position of alphabet: ${value - 96}`
    } else {
        return null
    }


}

console.log(position("e"), );
