// Идея - каждое значение уникально, а так полностью поъод на MAP
// НО VALUE и Keys  одно и тоже!! только для синхронизации с MAP value&key одно и тоже
// в Set можно передать любой тип данных
// одинаковые ключи не будут добавляться!!!!
const set = new Set([1, 2, 3, 3, 5, 6, 4, 3])
console.log(set) // Set(6) { 1, 2, 3, 5, 6, 4 }

set.add(10).add(20).add(30).add(20)
console.log(set) // Set(9) { 1, 2, 3, 5, 6, 4, 10, 20, 30 }

// проверка ключей
console.log(set.has(20)) // true
console.log(set.has(330)) // false

// размер
console.log(set.size)

// удаление элемента
console.log(set.delete(1)) //true

// очищение SET
//console.log(set.clear()) // set.size = 0

// получение значений
console.log(set.values()) //[Set Iterator] { 2, 3, 5, 6, 4, 10, 20, 30 }
// одно и тоже
// получение ключей
console.log(set.keys()) //[Set Iterator] { 2, 3, 5, 6, 4, 10, 20, 30 }

// получение ключ значений ))))
console.log(set.entries())
/* [Set Entries] {
  [ 2, 2 ],
  [ 3, 3 ],
  [ 5, 5 ],
  [ 6, 6 ],
  [ 4, 4 ],
  [ 10, 10 ],
  [ 20, 20 ],
  [ 30, 30 ]
} */

// перебор циклом 
for (let key of set) {
  console.log(key)  // 2 3 5 6 4 10 20 30
}

//=================================
// ПРИМЕР
//=================================

// функция уникальных значений в массиве
function uniqValue(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}

console.log(uniqValue([1, 1, 3, 3, 4, 4, 5, 3, 2, 5, 8, 0, 0, 6, 6, 6]))