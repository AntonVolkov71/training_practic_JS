const people = [
  { name: 'Вася', age: 25, budget: 40000 },
  { name: 'Коля', age: 17, budget: 20000 },
  { name: 'Саша', age: 24, budget: 30000 },
  { name: 'Миша', age: 15, budget: 10000 },
  { name: 'Кирилл', age: 21, budget: 70000 },
  { name: 'Дебил', age: 23, budget: 50 },
]


// For // самый простой перебор
for (let i = 0; i < people.length; i++) {
  // console.log(people[i])
}

//FOR OF
for (let person of people) {
  // console.log(person)
}
// ForEach
// people.forEach((p) => console.log(p))

// Map озвращает новый массив так как захотим, исходный не меняется
const newPeople = people.map(person => `Возвраст ${person.name} ${person.age}`)

// Filter
const adults = people.filter(person => person.age > 18)

// Reduce
const amount = people.reduce((acc, person) => acc + person.budget, 3000)

// Find - поиск элемента (возвращает элемент)
const debil = people.find(person => person.name === 'Дебил')
// console.log(debil) // { name: 'Дебил', age: 23, budget: 50 }

// FindIndex поиск элемента (возвращает индекс)
const debilIndex = people.findIndex(person => person.name === 'Дебил')
// console.log(debilIndex) // 

// --------------------------------
// Пример

const amount2 = people
  .filter(person => person.budget > 30000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget)
    }
  })
  .reduce((total, person) => total + person.budget, 0)

console.log(amount2)