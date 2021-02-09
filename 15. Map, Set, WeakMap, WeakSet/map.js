// обычная запись
const obj = {
  name: 'Anton',
  age: 30,
  job: 'Fullstack'
}

const entries = [
  ['name', 'Anton'],
  ['age', 30],
  ['job', 'fullstack']
]

// из объекта делает массив массивов
// console.log(Object.entries(obj))
// наоборот из массива массивов делает объект
// console.log(Object.fromEntries(entries))

// MAP - это карта (усложенный объект)
// можно ничего не передавать
const map = new Map(entries)

console.log(map)
console.log(map.get('name')) // доступ до полей

// в качестве ключей указывать любые типы данных

map
  .set('newField', 42) // ключ значение
  .set(obj, 'Value of object') // объект в качестве ключа
console.log(map.get(obj)) // доступ по объекту

map
  .set(NaN, 'NaN ?? ')
console.log(map.get(NaN))

// удаление ключа
map.delete('job') // возращает Boolean

// проверка ключа
console.log(map.has('job'))

// размер
console.log(map.size)

// очищение всей карты
// map.clear()
// console.log(map.size)

// ДОПОЛНИТЕЛЬНО

// перебор карты по ключ значения ввиде массива [key, value]
// метод .entries() необязательно он по умолчанию
for (let entry of map.entries()) {
  console.log(entry)
}
// сразу отдельные переменные деструктуризации
for (let [key, value] of map) {
  console.log(key, value)
}

// перебор карты вывод значений .values()
for (let value of map.values()) {
  console.log(value)
}

// перебор карты вывод ключей .values()
for (let key of map.keys()) {
  console.log(key)
}

// перебор forEach получаем сразу переменные ключ и значение 
map.forEach((key, value, map) => {
  console.log(key, value)
})

// -------------------------------
// сделать массив из карты
// развернуть карту спредом
const array = [...map]

// или другим способом
const array1 = Array.from(map)
console.log(array1)

// объект из карты
// но поле из объекта будет строкой!!!!!!!!!!!
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)

//===================================
// ПРИМЕР
//===================================
const users = [
  { name: 'Anton' },
  { name: 'Inna' },
  { name: 'Diana' },
]

// хотим для каждого пользовательья записывать время когда что-то посещает
const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

  // получаем время посещения пользователя
function lastVisit(user){
  return visits.get(user)
}

console.log(lastVisit(users[1]))
// КАК РАЗ КЛЮЧ ПО ОБЪЕКТУ!!!!