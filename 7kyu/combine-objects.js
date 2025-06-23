// ❓DESCRIPTION
//Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.


//Ваша задача - написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются таким образом, что значения совпадающих ключей складываются.

// Пример:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Возвращает { a: 13, b: 20, c: 36, d: 3 }
// Функция combine должна быть хорошим гражданином, поэтому не должна мутировать входные объекты.


// 🏓 TESTS
//it('Combine two objects', () => {
// assert.deepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
// assert.deepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });
// });

// it('Combine three objects', () => {
//     assert.deepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 });
//     assert.deepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 });
// });

// it('Handle empty objects', () => {
// assert.deepEqual(combine({}, {}, {}), {});
// assert.deepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 });
// });
// });


// ✅SOLUTION

const objA = {
    a: 10,
    b: 20,
    c: 30
}
const objB = {
        a: 3,
        c: 6,
        d: 3
    }
    // let result = Object.keys(objA) + Object.keys(objB)
    // console.log(result);


function combine(...objects) {
    let result = {}
    for (let i = 0; i < objects.length; i++) {
        const obj = objects[i]
        const keys = Object.keys(obj)
        for (let j = 0; j < keys.length; j++) {
            if (result[keys[j]]) {
                result[keys[j]] += objects[i][keys[j]]
            } else {
                result[keys[j]] = objects[i][keys[j]]
            }

        }
    }
    return result
}


console.log(combine(objA, objB));