// ❓DESCRIPTION
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
// Вот и конец учебного года, роковой момент вашего школьного отчета. Необходимо подсчитать средние баллы. Все ученики приходят к вам и просят вычислить для них средний балл. Легко! Нужно просто написать скрипт.

// Возвращает среднее значение заданного массива, округленное до ближайшего целого числа.

// Массив никогда не будет пустым.


// 🏓 TESTS
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);



// ✅SOLUTION
function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    return Math.floor(sum / marks.length)
}
console.log(getAverage([8, 10, 15, 16, 4, 18, 6, 5, 13, 10, 16, 16, 10, 14, 15]));
