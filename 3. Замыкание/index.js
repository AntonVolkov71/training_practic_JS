function createCalcFunction(n) {
  return function () {
    console.log(1000 * n)
  }
}
// ничего не вернет!!!!!!11
// createCalcFunction(3)
const bindObj = {
  name: 'Bind'
}

const calc = createCalcFunction(43)
// значения переданных параметров сохраняются (n=>43)
calc()

// либо 
createCalcFunction(32)()


// ПРИМЕР
function createIncrementor(n) {
  return function (num) {
    return n + num
  }
}

const addOne = createIncrementor(1)
// addOne замкнулась на 1 и всегда будет тот параметр

console.log(addOne(10)) // 11
console.log(addOne(14)) // 15

const addTen = createIncrementor(10)
console.log(addTen(10)) // 20
console.log(addTen(14)) // 24
// addTen замкнулась на 10 и всегда будет тот параметр

console.log(createIncrementor(3)(2)) // 5

// еще пример
function urlGenerator(domain) {
  return function (url) {
    return `http://${url}.${domain}`
  }
}
const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')
console.log(comUrl('yandex'))
console.log(comUrl('google'))
console.log(ruUrl('google'))
