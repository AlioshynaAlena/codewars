// ❓DESCRIPTION
// Your task is to add a new property usersAnswer to every object in the array questions.The value of usersAnswer should be set to null.The solution should work
// for array of any length.
//Ваша задача - добавить новое свойство users Answer к каждому объекту в массиве questions.Значение users Answer должно быть равно null.Решение должно работать для массива любой длины.

// For example:

//     var questions = [{
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0
//     }, {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//         corAnswer: 0
//     }];
// After adding the property the result should be:

//     var questions = [{
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0,
//         usersAnswer: null
//     }, {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//         corAnswer: 0,
//         usersAnswer: null
//     }];
// The questions array is already defined
// for you and is not the same as the one in the example.


// 🏓 TESTS
// describe("Tests", () => {
//     it("test", () => {
//         Test.expect(questions[0].usersAnswer === null);
//     });
// });



// ✅SOLUTION
//write your code here

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for (let i = 0; i < questions.length; i++) {
    questions[i].usersAnswer = null
}
console.log(questions);
