// ❓DESCRIPTION
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
// Я новичок в программировании, и теперь я хочу получить сумму двух массивов... На самом деле это сумма всех их элементов. Буду признателен за вашу помощь.
// P.S. Каждый массив содержит только целые числа. На выходе тоже будет число.


// 🏓 TESTS
//  assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//     assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//     assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//     assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);



// ✅SOLUTION
function arrayPlusArray(arr1, arr2) {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i]
        sum2 += arr2[i]
    }
    return sum1 + sum2
}
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
