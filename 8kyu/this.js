//this

// "use strict"
// 1. Global scope
// console.log(this)

// 2. Function
//✅
// const a = () => {
//   console.log(this)
// }
// a()


//✅
// function foo() {
//     console.log(this)
// }
// foo()


//✅
// function foo() {
//     //this === window
//     const a = () => {
//         //this ?
//         console.log(this) //
//     }
//     a()
// }
//
// foo()

//✅
// const user = {
//     firstName: 'Dima',
//     showName() {
//         console.log(this.firstName)
//     }
// }
//
// user.showName()

//✅
// const user = {
//     firstName: 'Dima',
//     showName() {
//         //this =
//         const a = function () {
//             //this =
//             console.log(this.firstName)
//         }
//         a()
//     }
// }
//
// user.showName()



//✅
// function fff() {
//     //this =
//     const user = {
//         firstName: 'Artem',
//         showName: () => {
//             //this =
//             const a =  function () {
//                 //this
//                 console.log(this.firstName)
//             }
//             a()
//         }
//     }
//     return user
// }
//
// const obj1 = fff()
// obj1.showName()


//✅
// function fff() {
//   //this =
//   const user = {
//     firstName: 'Artem',
//     showName: () => {
//       //this =
//       const a = () => {
//         //this
//         console.log(this.firstName)
//       }
//       a()
//     }
//   }
//   return user
// }
//
// const obj1 = fff()
// obj1.showName()



//✅
// function fff() {
//     //this =
//     const user = {
//         firstName: 'Artem',
//         showName() {
//             //this =
//             const a =  function () {
//                 //this
//                 console.log(this.firstName)
//             }
//             a()
//         }
//     }
//     return user
// }
//
// const obj1 = fff()
// obj1.showName()


//✅
// function fff() {
//     //this =
//     const user = {
//         firstName: 'Artem',
//         showName() {
//             //this =
//             const a =  () => {
//                 //this
//                 console.log(this.firstName)
//             }
//             a()
//         }
//     }
//     return user
// }
//
// const obj1 = fff()
// obj1.showName()


//✅
// const maxSpeed = 100
// let car = {
//     color: 'red',
//     maxSpeed: 200,
//     showMaxSpeed() {
//         console.log(this.maxSpeed)
//     }
// }
// car.showMaxSpeed()


//✅
// const maxSpeed = 100
// let car = {
//     color: 'red',
//     maxSpeed: 200,
//     showMaxSpeed: () => {
//         console.log(this.maxSpeed)
//     }
// }
// car.showMaxSpeed()


//✅
// var maxSpeed = 100
// let car = {
//     color: 'red',
//     maxSpeed: 200,
//     showMaxSpeed: () => {
//         console.log(this.maxSpeed)
//     }
// }
// car.showMaxSpeed()



//✅
// var maxSpeed = 100
// let car = {
//     color: 'red',
//     maxSpeed: 200,
//     showMaxSpeed () {
//         console.log(this.maxSpeed)
//     }
// }
// car.showMaxSpeed()



//✅
// var maxSpeed = 100
// let car = {
//     color: 'red',
//     maxSpeed: 200,
//     showMaxSpeed () {
//         console.log(car.maxSpeed)
//     }
// }
// car.showMaxSpeed()


//✅
// let car = {
//     color: 'red',
//     maxSpeed: 200,
//     showMaxSpeed() {
//         console.log(this.maxSpeed)
//     }
// }
//
// const car2 = car
// car = null
// car2.showMaxSpeed()



//✅
// let car = {
//   color: 'red',
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(car.maxSpeed)
//   }
// }
//
// const car2 = car
// car = null
// car2.showMaxSpeed()



//✅
// function startEngine() {
//     console.log(`start ${this.brand}`)
// }
//
// const car1 = {
//     brand: 'bmw'
// }
//
// const car2 = {
//     brand: 'kia'
// }
//
// car1.f = startEngine
// car2.f = startEngine
//
// car1.f()
// car2.f()



//✅
// const startEngine =  () => {
//   console.log(`start ${this.brand}`)
// }
//
// const car1 = {
//   brand: 'bmw'
// }
//
// const car2 = {
//   brand: 'kia'
// }
//
// car1.f = startEngine
// car2.f = startEngine
//
// car1.f()
// car2.f()



//✅
// let car3 = {
//     color: 'red',
//     showColor: () => {
//
//         (
//             () => {
//
//                 console.log(this.color)
//             }
//         )()
//     }
// }
//
// car3.showColor()


//✅
// let car3 = {
//   color: 'red',
//   showColor () {
//
//     (
//       () => {
//
//         console.log(this.color)
//       }
//     )()
//   }
// }
//
// car3.showColor()


//✅
// let car4 = {
//     color: 'red',
//     showColor() {
//         console.log(this.color)
//     }
// }
//
//
// let foo = car4.showColor
// foo()






// 3. call, apply, bind
//✅
// const car1 = {
//     brand: 'kia',
//     speed: 150,
//     startEngine(a, b) {
//         console.log(a,  b)
//         console.log(`start ${this.brand}`)
//     }
// }
//
// const car2 = {
//     brand: 'bmw',
//     speed: 200,
// }
//
// const car3 = {
//     brand: 'honda',
//     speed: 160,
// }
//
// car1.startEngine()
//
// car1.startEngine.call(car2, 5, 6)
// car1.startEngine.apply(car2, [1, 7])
//
// const fff = car1.startEngine.bind(car2)
// const fff2 = car1.startEngine.bind(car3)
// fff.call(car3)


//✅
// const scooter = {
//     brand: 'honda',
//     speed: 60
// }
//
// const car2 = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed() {
//         const a = function () {
//                 console.log(this.speed);
//             }
//         a.call(scooter)
//     },
//
// }
//
// car2.showMaxSpeed()


//✅
// const car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed() {
//         console.log(this.speed)
//     }
// }
//
// setTimeout(() => car.showMaxSpeed(), 2000)



//✅
// const dialer = {
//     name: 'Toyota',
//     models: ['Yaris', 'Corolla', 'Prado'],
//     showModelsInDialer() {
//         //this = dialer
//         const callback =  (model) => {
//             console.log(`Dialer: ${this.name}, have: ${model}`)
//         }
//         this.models.forEach(callback)
//     }
// }
//
// dialer.showModelsInDialer()

















































// 4. Function constructor

// function CarCreator(brand) {
//     //{}
//     //this = {}
//     this.brand = brand
//     //return this
// }
//
// const car1 = new CarCreator('bmw')
// console.log(car1)

// function foo() {
//     const x = 10
//     //this = {x: 30}
//     return {
//         x: 20,
//         func1: function () {
//             console.log(this.x)
//         },
//         func2: () => {
//             console.log(this.x)
//         }
//     }
// }
//
// // const obj1 = foo()
// // obj1.func1()
// // obj1.func2()
//
// const obj2 = foo.call({x: 30})
// // obj2.func1() //20
// // obj2.func2() //30
//
// let y = obj2.func1
// let z = obj2.func2
//
// y()
// z()
