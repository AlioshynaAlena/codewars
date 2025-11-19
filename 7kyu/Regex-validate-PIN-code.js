// ❓DESCRIPTION
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//   If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// 🏓 TESTS
// Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
// Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
// Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
// Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")


// ✅SOLUTION
function validatePIN (pin) {
  const hasLetters = /[a-zA-Zа-яА-Я]/.test(pin);
  const symbol = !/^\d+$/.test(pin)
  let value = false

  if (!hasLetters && !symbol) {
    value =  pin.length === 4 || pin.length === 6
  }
return value
}

console.log(validatePIN("12"))