// ❓DESCRIPTION
//Please write a function that sums a list, but ignores any duplicated items in the list.
// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// Пожалуйста, напишите функцию, которая суммирует список, но игнорирует любые дублирующиеся элементы в списке.
// Например, для списка [3, 4, 3, 6] функция должна возвращать значение 10,
// а для списка [1, 10, 3, 10, 10] функция должна возвращать значение 4.

// 🏓 TESTS
//assert.deepStrictEqual(sumNoDuplicates(input), expected);


// ✅SOLUTION
function sumNoDuplicates(numList) {
    return numList
        .filter(num => numList.indexOf(num) === numList.lastIndexOf(num))
        .reduce((sum, num) => sum + num, 0);

}

console.log(sumNoDuplicates([3, 4, 3, 6]));



// function sumNoDuplicates(arr) {
//         let uniqueArr = [];
//         let sum = 0;
//         arr.forEach(num => {
//             if (arr.indexOf(num) === arr.lastIndexOf(num)) {
//                 uniqueArr.push(num);
//                 sum += num;
//             }
//         });
//         return sum;
// }


//numList.filter(...) — создает новый массив, содержащий только те элементы из numList, которые проходят условие внутри функции фильтрации.
// Условие фильтрации: num => numList.indexOf(num) === numList.lastIndexOf(num)
// numList.indexOf(num) — возвращает индекс первого вхождения элемента num в массив.
// numList.lastIndexOf(num) — возвращает индекс последнего вхождения этого же элемента.
// Если эти два индекса равны, значит элемент встречается в массиве только один раз (он уникален).
// Если индексы не равны, значит элемент встречается более одного раза (дублируется).
// В результате, .filter() оставляет только уникальные элементы (те, что встречаются ровно один раз).
// .reduce((sum, num) => sum + num, 0) — суммирует все оставшиеся элементы массива (только уникальные), начиная с начального значения 0.
