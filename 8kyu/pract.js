// console.log("hello")
// setTimeout(() => {
//   console.log("yo")}, 1)
// setTimeout(() => {
//   console.log("EEEE")},2)
// setTimeout(() => {
//   console.log("WOrld")},0)
// console.log("hi")



// {
//   var a = 10;
// }
// function testScope() {
//   if (a) {
//     var b = 1;
//     const c = 3;
//   }
//   console.log(b); //? 1
//   console.log(c); //? ошибка
// }
// console.log(a); //? 10
// testScope();
// console.log(b); //? 1



// // 1. Написать статический метод isPromise(x) который возвращает true если x является экземпляром класса Promise
// // 2. Написать методммассива check() который возвращает объект, где кючи это индексы а значения это значения массива
//
// //TODO
//
// //Tests
// console.log(Promise.isPromise("")) //false
// console.log(Promise.isPromise()) //false
// console.log(Promise.isPromise(new Promise(r => {}))) //true
//
// console.log([1,2,3].check())//{'0':'1', '1':2, '2':3}
// console.log(['a','b','c'].check())//{'0':'a', '1':'b', '2':'c'}
// console.log([].check())//{}




// // Что выведет в консоль следующий код?
// const numbers = [1, 2, 3, 4, 5];
// const [y,x] = numbers;
//
// console.log(y);
// console.log(x);



// Реализовать методы,
// которые в процессе выполнения строки (2).plus(3).minus(1) дали бы
// console.log((2).plus(3).minus(1))



// Number.prototype.plus
//   = function(value) {
//   return this + value
// };
//
// console.log((3).plus(3));




// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);
// console.log(8);


// let resource = 'lumber'
//
// manageResources()
//
// function manageResources() {
//   let resource = 'crystals'
//   if (true) {
//     let resource = 'stone'
//     console.log(resource) // Вывод 1
//   }
//   console.log(resource) // Вывод 2
// }
//
// console.log(resource) // Вывод 3
//
// if (true) {
//   resource = 'gold'
//   console.log(resource) // Вывод 4
// }
// console.log(resource) // Вывод 5


// let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];
// const func = (arr) => {
//   const seen = new Set();
//   const duplicates = [];
//
//   for (let num of arr) {
//     if (seen.has(num)) {
//       duplicates.push(num);
//     } else {
//       seen.add(num);
//     }
//   }
//
//   return duplicates;
// }
//
// console.log(func(arr));



// function first() {
//   console.log(1);
//   second();
//   console.log(2);
// }
//
// function second() {
//   console.log(3);
//   third();
//   console.log(4);
// }
//
// function third() {
//   console.log(5);
// }
//
// first();



// //globalLE {} --> null
//
// startEngine()
//
// let car = 'bmw' //globalLE {car: 'bmw'} --> null
//
// const startEngine = function () {
//   //startEngineLE {} --> globalLE
//   const car = 'kia' // startEngineLE {car: 'kia'} --> globalLE
//   console.log(`Start ${car}`)
// }
//
// startEngine() //globalLE {startEngine: function} --> null
//
// car = 'audi' //globalLE {startEngine: function, car: 'audi'} --> null
//
// startEngine()



