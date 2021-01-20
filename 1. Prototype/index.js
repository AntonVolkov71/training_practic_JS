const pers = {
  name: "Anton",
  age: 30,
  greet: function () {
    console.log("greet")
  }
}

// сущность от класса Object
const person = new Object({
  name: "Anton",
  age: 30,
  greet: function () {
    console.log("greet")
  }
})

// и pers и person будут иметь свойство sayHello
Object.prototype.sayHello = function () {
  console.log("Hello")
}

// создание сущности от объекта
// pena будет содержать все поля и свойства person
const pena = Object.create(person)
pena.name = "Pena"

// все есть объекты
const str = new String('I am string')
// тоже самое
//const str = "i'm string"


/// ======================
// Примеры
const array = [1, 5, 32, 9, 8]

// задача в том что функцию которая ниже всегда будет нужно импортировать с собой, что неудобно

// просто необхоидимо перемножить все числа
// function multBy(array, n) {
//   return array.map(function (i) {
//     return i * n
//   })
// }

// ЗАДАЧА в том, чтобы всегда можно вызывать эту функцию 
Array.prototype.multBy = function (n = 1) {
  return this.map(function (i) {
    return i * n
  })
}
const testArray = [1, 2, 3,]
console.log(array.multBy())
console.log(testArray.multBy(3))