// по сути тот же MAP
// избегание утечек данных!!!
// В структуре weakMap ключами могут быть только объекты!!!!!!!!


// если переменная больше не  используется или обнулена то она ДОЛЖНА удаляется

// При таком не удаляется, не чиститься память
let obj = { name: 'weakmap' }

const arr = [obj]
obj = null
console.log(obj) // будет null, но при таком он сохраняется в массиве
console.log(arr[0]) // { name: 'weakmap' }  а объект мы удалили (null)

// ---------------------
// Чистка памяти
let obj1 = { name: 'weakMap' }

// ключ объект , значение строка(или любой другой тип)
const map = new WeakMap([
  [obj1, 'obj data']
])

//-------------------------------------------
// get, set, delete, has - других методов НЕТ
// ------------------------------------------
console.log(map.has(obj1)) // true
console.log(map.get(obj1)) // obj data

// если удалить объект то сборщик мусора удалит его везде
obj1 = null
console.log(map.has(obj1)) // false
console.log(map.get(obj1)) // undefined
console.log(map) // WeakMap { <items unknown> }

// -------------------------------------------
// Пример
// -------------------------------------------


// идея - будут пользователи, если в кеше есть пользователи то тогда сразу возвращается его значение
// если кеше его нет тогда заносится его информация  

const cache = new WeakMap()
function cacheUser(user){
  if(!cache.has(user)){
    cache.set(user, Date.now())
  }
  return cache.get(user)
}

let inna = {name: 'Inna'}
let anton = {name: 'Anton'}
cacheUser(inna)
cacheUser(anton)

console.log(cache.has(inna)) // true
console.log(cache.has(anton)) // true

// если было дохрена таких объектов, и один из них удалилил

inna = null
console.log(cache.has(inna)) // false
