// ❓DESCRIPTION
// Nathan loves cycling.
//   Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//   You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.
//   For example:
//   time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// 🏓 TESTS
// assert.strictEqual(litres(0), 0, 'litres(0) should return 0');
// assert.strictEqual(litres(1), 0, 'litres(1) should return 0');
// assert.strictEqual(litres(2), 1, 'litres(2) should return 1');
// assert.strictEqual(litres(3), 1, 'litres(3) should return 1');



// ✅SOLUTION
function litres(time) {
  return Math.floor(time/2)
}

console.log(litres((11.8)))