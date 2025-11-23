// let globalScope = {
//   outerScope: null,
//   f: 'function', //link
//   a: 10
// }
//
// let a = 10
//
// function f() {
//
//   let fScope = {
//     outerScope: globalScope,
//     i: undefined, //первый раз будет undefined как запустится js -> 50
//     inner: 'function'
//   }
//
//   console.log(a)
//
//   var i = 50
//
//   function inner () {
//     let innerScope = {
//       outerScope: fScope,
//     }
//     i+=50
//     console.log(i)
//   }
//   inner()
// }
// f()
// //если функция что-то не нашла, то она по ссылке идет выше и ищет там
// //при поиске переменной мы поднимаемся из внутри наружу, идем строго вверх

// function f(arq) {
//   function inner (arq2) {
//     arq+=arq2
//     console.log(arq)
//   }
//   return inner
// }
//
// var someFunc = f(100)
// someFunc(10)
// someFunc(20)
// someFunc(30)




// function test() {
//   let car = 'lada'
//    const inner = () => {
//      console.log(car= car + ' ' + '!')
//    }
//    inner()
//   inner()
// }
// test()