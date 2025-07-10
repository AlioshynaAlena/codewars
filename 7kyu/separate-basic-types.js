// ❓DESCRIPTION
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']


// 🏓 TESTS
// assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), { number: [1, 2], string: ['a', 'b'], boolean: [false] });
// assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});


// ✅SOLUTION
function separateTypes(input) {
    const newObj = {
        number: [],
        string: [],
        boolean: [],
    }
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "string") {
            newObj.string.push(input[i])
        } else if (typeof input[i] === "number") {
            newObj.number.push(input[i])
        } else if (typeof input[i] === "boolean") {
            newObj.boolean.push(input[i])
        }
    }
    for (const key in newObj) {
        if (newObj[key].length === 0) {
            delete newObj[key];
        }
    }
    return newObj
}
console.log(separateTypes(['a', 1, 2, false, 'b']));
console.log(separateTypes(['a', 1, 2]));
console.log(separateTypes([false, 0.32076161428264793, 0.29614270178440294, false, 0.4515889099443382, "vc6zqh", "xuqytm", true]));
