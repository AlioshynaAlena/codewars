// ❓DESCRIPTION
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// 🏓 TESTS
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');



// ✅SOLUTION
function solution(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
console.log(solution(''));
