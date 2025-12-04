// console.log('a')
//
// setTimeout(function () {
//   console.log('timeout')
// }, 1000)
//
// console.log('b')
//
// console.log('c')




// console.log(1)
//
// setTimeout(function firstFN() {
//   console.log(2)
// }, 8000)
//
// setTimeout(function secondFN() {
//   console.log(3)
// }, 4000)
//
// setTimeout(function thirdFN() {
//   console.log(4)
// }, 3000)
//
// console.log(5)




// setTimeout(function () {
//   console.log(1)
// }, 1000)
//
// setTimeout(function () {
//   console.log(2)
// }, 1000)
//
// setTimeout(function () {
//   console.log(3)
// }, 1000)
//
// setTimeout(function () {
//   console.log(4)
// }, 1000)



// function a() {
//   setTimeout(() => {
//   console.log('a')
// })
// }
//
// function b() {
//   console.log('b')
// }
//
// a()
//
// new Promise(function (res, rej) {
//   console.log('create promise')
//   res()
// }).then(() => {
//   setTimeout(function timer() {
//     console.log('timeout')
//   }, 0)
// })
//
// b()





// console.log(1)
//
// setTimeout(() => {
//   console.log(2)
//   Promise.resolve().then(() => {
//     console.log(3)
//   })
// })
//
// new Promise((res, rej) => {
//   console.log(4)
//   res(5)
// }).then(data => {
//   console.log(data)
//
//   Promise.resolve()
//     .then(() => {
//       console.log(6)
//     })
//     .then(() => {
//       console.log(7)
//
//       setTimeout(() => {
//         console.log(8)
//       }, 0)
//     })
// })
//
// setTimeout(() => {
//   console.log(9)
// })
//
// console.log(10)



// setTimeout(() => {
//   console.log('1')
// }, 0)
//
// setTimeout(() => {
//   console.log('2')
// }, 1000)
//
// new Promise(function (res, rej) {
//   console.log('3')
//   res()
//   console.log('4')
// }).then(() => {
//   console.log('5')
// })
//
// console.log('6')
//
// async function test1() {
//   console.log('7')
//   await test2()
//   console.log('8')
// }
//
// async function test2() {
//   console.log('9')
// }
//
// test1()
//
// console.log('10')




// console.log('A')
//
// setTimeout(() => {
//   console.log('B')
// }, 0)
//
// Promise.resolve().then(() => {
//   console.log('C')
// })
//
// async function alpha() {
//   console.log('D')
//   await beta()
//   console.log('E')
// }
//
// async function beta() {
//   console.log('F')
//   await gamma()
//   console.log('G')
// }
//
// async function gamma() {
//   console.log('H')
// }
//
// alpha()
//
// new Promise((resolve) => {
//   console.log('I')
//   resolve()
//   console.log('J')
// }).then(() => {
//   console.log('K')
// })
//
// console.log('L')





// async function first() {
//   console.log(9)
//   await Promise.resolve(2).then(r => console.log(r))
//   console.log(0)
//   await Promise.resolve(3).then(r => console.log(r))
// }
//
// async function second() {
//   console.log(10)
//   await Promise.resolve(4).then(r => console.log(r))
//   console.log(11)
//   await Promise.resolve(5).then(r => console.log(r))
// }
//
// first()
// second()
//
// const promises = Promise.resolve('new Promise')
// promises.then(str => console.log(str))



// console.log('1')
//
// setTimeout(() => {
//   console.log('2')
//   Promise.resolve().then(() => console.log('3'))
// }, 0)
//
// Promise.resolve().then(() => {
//   console.log('4')
//   setTimeout(() => console.log('5'), 0)
// })
//
// async function main() {
//   console.log('6')
//   await Promise.resolve()
//   console.log('7')
//   setTimeout(() => console.log('8'), 0)
// }
//
// main()
//
// new Promise((resolve) => {
//   console.log('9')
//   resolve()
// }).then(() => {
//   console.log('10')
//   return Promise.resolve()
// }).then(() => {
//   console.log('11')
// })
//
// setTimeout(() => console.log('12'), 0)
//
// console.log('13')
//
// Promise.resolve().then(() => console.log('14'))
//
// console.log('15')




// function start() {
//   console.log('a');
//   middle();
//   console.log('b');
// }
// function middle() {
//   console.log('c');
//   end();
//   console.log('d');
// }
// function end() {
//   console.log('e');
// }
// start();



// console.log('1');
//
// setTimeout(() => {
//   console.log('2');
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log('3');
// });
//
// console.log('4');



// (function task3(){
//   const p = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//       console.log('rejected now');
//       reject("failure")
//     }, 1500);
//   });
//
//   p.then(()=>console.log('success 1'), ()=>console.log('fail 1'))
//     .then(()=> console.log('success 2'), ()=> console.log('fail 2'))
//
//   p.then(()=>console.log('success 3'), ()=>console.log('fail 3'))
//     .then(()=>console.log('success 4'), ()=>console.log('fail 4'))
// })()



// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// process.nextTick(() => console.log("NextTick"));
// console.log("End");
