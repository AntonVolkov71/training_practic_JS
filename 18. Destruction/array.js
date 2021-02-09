
function calcValues(a, b) {
  return [
    a + b,
    a - b
  ]
}

console.log(calcValues(42, 10)) // [52, 32]

const result = calcValues(42, 10)

// Так громоздко!!!!!!!!
const sum = result[0]
const sub = result[1]

console.log(sum) // 52
console.log(sub) // 32

// Так лучше!!!!!!
const [sum1, sub1] = result
console.log(sum, sub) // 52, 32

// ========================================
// А ТАК ЕЩЕ КРУЧЕ
// ========================================
const [sum2, sub2] = calcValues(42, 10)
console.log(sum, sub) // 52, 32

// --------------------------------
// Увеличим операций в calcValues

// Но нам например щас не нужно вычитание
// А нужно сложение и умножение
function calcValues1(a, b) {
  return [
    a + b,
    a - b,
    undefined,
    a * b,
    a / b
  ]
}

// так ПЛОХО еслли мы не будем использовать sub3!!!!!!
const [sum3, sub3, mult3] = calcValues1(42, 10)

// Лучше, и rest добавить 
const [sum4, , mult4, ...other4] = calcValues1(42, 10)
console.log(sum4, mult4, other4) // 52, 420 , [4.2]

// Если нам нельзя делать возведение (любое какоето действие) - ставим в undefined в основной функции

// но хотим добавить по умолчанию в какой то сущности
const [sum5, sub5, elevate = 'Степени нет', mult5, ...other] = calcValues1(42, 10)

console.log(sum5, sub5, mult5, other, elevate) // 57 52 32 420 [4.2] "Степени нет"