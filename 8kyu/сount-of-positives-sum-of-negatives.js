// ❓DESCRIPTION
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// Дан массив целых чисел.
// Верните массив, в котором первый элемент - счетчик положительных чисел, а второй - сумма отрицательных чисел.
// 0 не является ни положительным, ни отрицательным числом.
// Если входные данные являются пустым массивом или равны null, возвращается пустой массив.

// Пример
// Для входных данных[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] вы должны вернуть[10, -65].


// 🏓 TESTS
// let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [8, -50];    
//     assert.deepEqual(actual, expected);



// ✅SOLUTION
function countPositivesSumNegatives(input) {

    let pozitive = 0;
    let negative = 0;

    if (input === null || input.length === 0) {
        return []
    }

    for (let i = 0; i < input.length; i++) {

        if (input[i] > 0) {
            pozitive++
        } else {
            negative = negative + input[i]
        }
    }
    return [pozitive, negative]
}
console.log(countPositivesSumNegatives(null));
