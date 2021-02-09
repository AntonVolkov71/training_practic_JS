// ------------------------------
// Wrapper 
// если поля не в объекте то хадаем ему дефолтное значение
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  })
}
// использование wrapper, передаем два параметра один основной второй по умолчанию
const position = withDefaultValue(
  {
    x: 24,
    y: 42
  },
  15 // по умолчанию для того поля которго не существует
)

//console.log(position.z) // => 15

// -------------------------------
// Hidden properties
// прячет определенные свойства, которые начинаются с _ (сами так решил что именно '_')
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    // ловушка на метод has, возращает true если проп имеется в объекте и не начинается с  '_'
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),

    // какие ключи находятся в объекте, ключи начинающие с '_' не доступны
    // Reflect.ownKeys(position) => //['x', 'y'] - массив из ключей в строковом формате
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),

    // 3 параметр это и есть сам Proxy который возвращаем
    get: (obj, prop, receiver) => (prop in receiver // по этой проверке вызовется proxy ownKeys
      ? obj[prop]
      : void 0) // undefined 
  })
}

const data = withHiddenProps({
  name: "Anton",
  age: 30,
  _uid: '123456789'
})

//  console.log(data) // так видно все поля
//  console.log(data._uid) // undefined
// console.log('_uid' in data) // false
// console.log('name' in data) // true
// for (let key in data) console.log(key) // name, age


// -------------------------------
// OPtinization
// Задача найти елемент по его id
// Если использовать find то это хлопотная итерация
// userData.find( user => user.id === 3)

const userData = [
  { id: 12, name: 'Anton', job: 'Fullstack', age: 30 },
  { id: 23, name: 'Inna', job: 'Beatiful', age: 32 },
  { id: 33, name: 'Diana', job: 'Dauther', age: 4 },
  { id: 44, name: 'NIkita', job: 'balbes', age: 32 },
]

// пример что нужно сделать
// делаем обект с ключами с значением id, для обращения по id
// const index = {}
// userData.forEach(i => index[i.id] = i)
// index[12] // { id: 12, name: 'Anton', job: 'Fullstack', age: 30 },

// Тоже на PROXY
const IndexedArray = new Proxy(Array, {
  // ловушка когда создаем массив любой
  construct(target, [args]) { // данные в массиве
    const index = {}
    args.forEach(item => index[item.id] = item)

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push': 
            return item => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          
          case 'findById': 
            return id => index[id]

          default: 
            return arr[prop]
        }
      }
    })
  }
})

const users = new IndexedArray(userData)
console.log(users.findById(12))
users.push({ id: 55, name: '55', job: 'ba5s', age:55 },)
console.log(users.findById(55))