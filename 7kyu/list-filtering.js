// ❓DESCRIPTION
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// В этом кате вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.


// 🏓 TESTS
// assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
// assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
// assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');


// ✅SOLUTION

function filter_list(l) {
    return l.filter(n => n !== String(n))
}
console.log(filter_list([1, 'a', 'b', 0, 15]));
