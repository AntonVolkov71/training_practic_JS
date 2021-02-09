// REST 

// обычная функция
function sum(a, b) {
  return a + b
}

const numbers2 = [1, 2, 3, 4, 5]

console.log(sum(...numbers2)) // складывает первые два элемента при function sum(a, b){}


// функция оператора REST
function sumRest(a, b, ...rest) {
  console.log(rest) // [3, 4, 5]
  return a + b + rest.reduce((a, i) => a + i, 0)
}

console.log(sumRest(...numbers2)) // 15

// ----------------------------
// ПРИМЕР
// ----------------------------

const a = numbers2[0]
const b = numbers2[1]

// либо
const [c, d, ...other] = numbers2
console.log(a === c) // true
console.log(other) // [3, 4, 5]


// ДЛЯ ОБЪЕКТОВ
const person = {
  name: 'Anton',
  age: 30,
  city: 'Moscow',
  country: 'Russia'
}

let { name, age, ...otherFields } = person

console.log(name, age, otherFields)
name = 20
console.log(person.name) // Anton
console.log(name) // 20