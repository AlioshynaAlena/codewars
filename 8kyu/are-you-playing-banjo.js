// ❓DESCRIPTION
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// // Создайте функцию, которая отвечает на вопрос "Играете ли вы на банджо?".
// Если ваше имя начинается с буквы "R" или строчной буквы "r", значит, вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// имя + "играет на банджо" 
// имя + "не играет на банджо"
// Указанные имена всегда являются допустимыми строками.

// 🏓 TESTS
//assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");


// ✅SOLUTION
function areYouPlayingBanjo(name) {
    // Implement me
    let banjo = name[0]
    return banjo === "r" || banjo === "R" ? name + " plays banjo" : name + " does not play banjo"

}
console.log(areYouPlayingBanjo("Adam"));
