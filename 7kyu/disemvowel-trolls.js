// ❓DESCRIPTION
// Trolls are attacking your comment section!
//   A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//   For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//   Note: for this kata y isn't considered a vowel.

// 🏓 TESTS
// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

// ✅SOLUTION
function disemvowel(str) {
let string = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" &&
      str[i] !== "A" && str[i] !== "E" && str[i] !== "I" && str[i] !== "O" && str[i] !== "U") {
      string += str[i]
    }
  }

  return string;
}

console.log(disemvowel("This website is for losers LOL!"))