const person = {
  name: 'Anton',
  age: 30,
  address: {
    country: 'Russia',
    city: 'Moscow'
  }
}

const { name, age, car } = person // 'Anton', 30, undefined

// задание по умолчанию
const { name1, age1, car2 = 'Машины нет' } = person // 'Anton', 30, 'Машины нет'
console.log(name, age, car2)

// запись КЛЮЧА в переменную
const {
  name: firstName = 'Без имени',
  age: firstAge
} = person
console.log(firstName) // 'Anton'

// Вложенные ключи
const {
  address: {
    city: homeTown = 'Москва', country
  }
} = person
console.log(homeTown)

// -----------------------------------
// REST
const { name: name2, ...info } = person
console.log(name2, info) // 'Anton', {address: { country: 'Russia',  city: 'Moscow'}

// -----------------------------------
// ПРИМЕР
// -----------------------------------

// СТАРО и МНОГО ЛИШНЕГО
function logPerson(per) {
  console.log(per.name + ' ' + per.age)
}
logPerson(person)

// Так лучше
function logPersonVAH({ name: firstName = 'Inna', age, ...other }) {
  console.log(name, age, other)
}

logPersonVAH(person)

