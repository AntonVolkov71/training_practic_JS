// ----------------- //
// Proxy - различные ловушки для объектов, классов, функций
// - это мидлвара (ловушка) перед различными командами например объекта, где можно добавить (изменить) логику, либо ничего не делать

// ---------------------
// -----  Objects ------
const person = {
  name: 'Anton',
  age: 30,
  job: 'Fullstack'
}


// проксирование
// два параметра 
// 1 - target - на кого хотим повесить прокси
// 2 - хандлеры, набор парметров, методы для ловушек
const op = new Proxy(person, {
  // один из основных
  // работает при использовании op.name
  get(target, prop) {
    // console.log(`Getting prop ${prop}`)

    // ПРИМЕР ловушки op.name_age
    
    // вводим поля через _, и если они есть то выведутся их значения)))))
    // op.name_age -> 'Anton 30'
    if (!(prop in target)) {
      return prop
        .split('_')
        .map(p => target[p])
        .join(' ')
    }
    return target[prop]
  },

  // проверка при установлении поля, если поля нет то ошибка
  // работает при использовании op.name = 12
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },

  // работает при проверкке 'name' in op
  has(target, prop) {
    // можно придумывать кастомные валидации
    return ['age', 'name', 'job'].includes(prop)
  },

  // ловушка перед удалением
  // работает при delete op.name
  deleteProperty(target, prop) {
    console.log('Deletting', prop)
    delete target[prop]
    return true
  }
})


// -----------------------
// -----  Functions ------

const log = text => `Log: ${text}`

// создание прокси для функции
const fp = new Proxy(log, {
  // ловушка при вызове функции
  apply(target, thisArg, args) {
    // target - сама функция
    // thisArg -  контекст (undefined если не передать)
    // args -  аргументы
    console.log("Calling fn..")

    // вызов логики которая была 
    // если контекст не передан, используется свой контекст той функции Log
    return target.apply(thisArg, args).toUpperCase()
  }
})


// ---------------------
// -----  Classes ------
// все ловушки объекта также есть в классах

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  // ловушка для конструктора
  construct(target, args) {
    console.log('construсt')
    console.log('target', target)
    console.log('args', args)

    // возвращаем класс с аргументами
    // return new target(...args) - просто вернуть класс

    // или делать что хотим например обернуть в Proxy
    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop "${prop}"`)
        return t[prop]
      }
    })

  },
})

const person1 = new PersonProxy('Anton', 30)