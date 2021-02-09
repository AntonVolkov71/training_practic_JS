const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Kazan: 5,
  Paris: 2
}

//--------------------------------
// SPREAD для МАССИВОВ
console.log(...citiesRussia)
console.log(...citiesEurope)

// скопировать массив
const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope]

// раньше копирование
const allCities2 = citiesEurope.concat(citiesRussia)


// SPREAD для ОБЪЕКТА
// только разввернуть в ОБЪЕКТ, прост от нельзя ...object
console.log({ ...citiesEuropeWithPopulation })

// добавление нескольких объектов
// при одинаковых ключах запишется последний!!!!!! 
console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })


//----------------------------------
// ПРИМЕР
// ---------------------------------

// 1. Узнать самое большое число
const numbers = [5, 26, 37, 53, 19]

console.log(Math.max(5, 26, 37, 53, 19))

console.log(Math.max(numbers)) // ОШИБКА NaN

console.log(Math.max(...numbers))

// как раньше работало 
console.log(Math.max.apply(null, numbers))

// 2. Получитьс доступ до DOM-node
const divs = document.querySelectorAll('div')
console.log(divs) // NodeList - недоМАССИВ
// console.log(divs.map)// ошибка, только forEarch

const nodes = [...divs] //массив из нод элементов
console.log(nodes.map(el => {
  el.textContent = 'text'
  return el
})) // [div, div, div]




