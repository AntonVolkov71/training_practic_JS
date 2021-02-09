// Похож на weakMap - значения могут быть только ОБЪЕКТЫ
// доступны методы из SET

const users = [
  { name: 'Anton' },
  { name: 'Inna' },
  { name: 'Diana' },
]

const visits = new WeakSet()
visits.add(users[0]).add(users[1])

// есть такой объект или нет
console.log(visits.has(users[0])) // true
console.log(visits.has(users[1])) // true
console.log(visits.has(users[2])) // false

// удалили одного user
users.splice(1,1)
console.log(visits.has(users[0])) // true
console.log(visits.has(users[1])) // false
