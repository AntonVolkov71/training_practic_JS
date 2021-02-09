// функции которые последовательно выдают результат ее работы

// добавляем * и доступен yeild
function* strGenerator() {
  yield 'H'
  yield 'E'
  yield 'L'
  yield 'L'
  yield 'O'
}

const str = strGenerator()

// получение yeild
str.next() // первый раз {value: 'H', done: false}
str.next() // второй раз {value: 'E', done: false}
str.next() // третий раз {value: 'L', done: false}
// ......
str.next() // как закончатся yeild  {value: undefined, done: true}

// обрабиться к value
str.next().value


// ПРИМЕР generator 
function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}
const num = numberGen(7)


// ------------------------
// Пример (имитация) своего генератора (сделано на замыкании)
const iterator = {
  gen(n = 10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false }
        }
        return { value: undefined, done: true }
      }
    }
  }
}

// ----------------------------------
// FOR OF
// работает по Symbol итератором

// вывод по элементно
let i = 0
for (let k of [1,3,234,2,54,423,423]) {
  console.log(k, i++)
}

// вывод по символьно
for (let k of 'asdfghjhkj') {
  console.log(k, i++)
}

// будет ошибка так его ключи не итерабельны!!!!!!!!
// for (let k of iterator) {
//   console.log(k, i++)
// }

// а такой итератор будет норм
// в качестве ключа будет Symbol.iterator 
const iterator1 = {
  [Symbol.iterator](n = 10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false }
        }
        return { value: undefined, done: true }
      }
    }
  }
}
// так будет итератор!!!!!!!!
for (let k of iterator1) {
  console.log(k, i++)
}

// -----------------------------
// а это реальный генератор 
function* iter(n=10){
  for(let i=0; i < n; i++){
    yield i
  }
}

// вместо iter.next() перебор генератора
for (let k of iter(6)) {
  console.log(k, 'generator epta')
}
