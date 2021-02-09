
// функция задржки через Промис
const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'


// ------ Стандартный промисовский подход!!!!  -----

// делает запрос и возвращает промис от fetch и обработки json()
function fetchTodos() {
  console.log("Fetch todo started")

  // чтобы не делать вложеные then возвращаем промис fetch
  // если в одну строку то сразу return
  return delay(2000)
    .then(() => fetch(url))
    .then(response => response.json())
}

fetchTodos()
  .then(data => {
    console.log("Data 1", data)
  })
  .then(() => fetchAsyncTodos())
  .catch(e => console.error(e))


// ----- Подход ASYNC / AWAIT ---------

// для обрбаботки ошибок вместо catch используется try catch

async function fetchAsyncTodos() {
  console.log("Fetch todo started 2")

  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log("Data 2", data)
  } catch (e) {
    console.error(e)
  } finally {
    console.log("finnaly")
  }

}

// либо просто вызвать тут fetchAsyncTodos()
