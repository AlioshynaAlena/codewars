// ❓DESCRIPTION
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.

// О нет!
// Какой-то очень забавный веб-разработчик выдал вам последовательность чисел из своего API-ответа в виде последовательности строк!
// Вам нужно привести весь массив к правильному типу.
// Создайте функцию, которая принимает в качестве параметра последовательность чисел, представленных в виде строк, и выводит последовательность чисел.
// Т.е.:["1", "2", "3"] - [1, 2, 3].
// Обратите внимание, что вы можете получать и числа с плавающей запятой.


// 🏓 TESTS
//   assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);


// ✅SOLUTION
function toNumberArray(stringarray) {
    return stringarray.map(string => Number(string))
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));
