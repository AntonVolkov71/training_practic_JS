// LocalStorage - работает в основном только со строками

// размер 5 мб


// не улетает на сервак

// Но почему то и числа здесь сохраняет, НО СОХРАНЯЕТ В СТРОКОВОМ

// LocalStorage рабоает только для одного домена, для разных URL будет свой localStorage

const myNumber = 42

// просмотр
console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber)

// усновкаа
console.log(typeof localStorage.getItem('number'))

// удаление
localStorage.removeItem('number')
console.log(localStorage.getItem('number'))

// полностью очистить
localStorage.clear()

// -------------------------------
// НЮАНСЫ
const object = {
  name: "Anton",
  age: 30
}

localStorage.setItem('person', object) // будет [object object]

// для правильной записи JSON.stringify()
// строка в формате JSON
localStorage.setItem('person', JSON.stringify(object))

// для получения
const raw = localStorage.getItem('person')
raw.name = 'Inna'
console.log(raw) // иичего не будет так как это строка

// надо перевести из строки в объект
const obj = JSON.parse(localStorage.getItem('person'))
console.log(obj)



//==============================
// синхронизация между разными вкладками

// отрабатывает при изменении localStorage но в другой вкладке этого домена
window.addEventListener('storage', event => {
  console.log(event) // много чего, старое новое значение
})