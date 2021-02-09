// при таком способе создания объекта:
// все свойства не по умолч, а почти все false
// нельзя перебрать поля и их значения
// нельзя перезаписать поле

//принимает два параметра
const person = Object.create({
  // прототип нового созданного объекта
  calculateAge() {
    console.log('Age', new Date().getFullYear() - this.birthYear)
  }

}, {
  // поле объекта задается так
  // здесь настройка поля
  name: {
    value: "Anton",
    enumerable: true, // возможность перебора
    writable: true, // возможность перезаписи
    configurable: true // возможность удаления поля 
  },
  birthYear: {
    value: 1990,
    enumerable: false,
    writable: true,
    configurable: false
  },
  // GETTER & SETTER параметры для поля
  age: {
    // геттер
    // обязатеьно возвращает
    get() {
      return new Date().getFullYear() - this.birthYear
    },
    // сеттер
    set(value) {
      document.body.style.background = 'yellow'
      console.log("Set age", value)
    }
  }
})

// возможность перезаписи
//person.name = 'xep'

// возможность перебора
// ЭТОТ ЦИКЛ БЕЖИТ ПО ПРОТОТИПУ!!!!
for (let key in person) {
  // перебор только своих методов и полей
  if (person.hasOwnProperty(key)) {
    console.log('key', key, person[key])

  }
}

// возможность удаления поля 
// delete person.birthYear

// вызов геттера
person.age

// вызов сеттера
person.age = 30
