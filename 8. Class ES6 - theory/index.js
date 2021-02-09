// обычный объект
// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true
// }

class Animal {
  // поле доступна только в классе. недоступна в наследуемом объекте
  static type = 'ANIMAL'

  // иинициализация полей
  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }
  voice() {
    console.log('i am animal')
  }
}

// создание сущности (объекта) от класса
const animal = new Animal({
  name: 'Animal',
  age: 5,
  hasTail: true
})

// Наследование от класса
class Cat extends Animal {
  static type = 'Cat'

  constructor(options) {
    // обязательно super для вызова родительского конструктора
    super(options)
    // если без super будет ошибка
    this.color = options.color
  }

  // перезапись родительского метода, только для этого класса
  voice() {
    // доступ до родительского метода
    super.voice()
    console.log('I am cat')
  }

  // GETTER & SETTER

  get ageInfo() {
    return this.age * 7
  }
  set ageInfo(newAge) {
    this.age = newAge
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black' // в объекте animal не будет этого поля
})