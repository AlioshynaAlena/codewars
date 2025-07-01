// ❓DESCRIPTION
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//Напишите функцию, которая принимает в качестве аргумента массив строк и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой до самой длинной.
// Например, если в качестве аргумента будет передан массив:
// ["Телескопы", "Очки", "Глаза", "Монокли"]
// Ваша функция вернет следующий массив:
// ["Глаза", "Очки", "Монокли", "Телескопы"]
// Все строки в массиве, переданном в вашу функцию, будут разной длины, поэтому вам не придется решать, как упорядочить несколько строк одинаковой длины.


// 🏓 TESTS
//  it("Test 1",function(){
//     Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
//   });
//   it("Test 2",function(){
//     Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
//   });
//   it("Test 3",function(){
//     Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
//   });

// ✅SOLUTION
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)

}
console.log(sortByLength(["Beg", "Life", "I", "To"]));
