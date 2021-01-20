
// // Написать свою функйцию bind

// // Пример:

function logPerson(args) {
  console.log(args)
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Mickle', age: 22, job: 'frontend' }

const person2 = { name: 'Anton', age: 30, job: 'fullstack' }

bind(person1, logPerson)(33)
bind(person2, logPerson)("args")

// ****************************** //
// РЕШЕНИЕ, универсальное
function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }

}
