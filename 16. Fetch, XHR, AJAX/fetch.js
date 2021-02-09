const requestURL = "https://jsonplaceholder.typicode.com/users"

// XHR (XMLHttpRequest)


// универсальная функция запрос 
function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    body: JSON.stringify(body),
    method,
    headers
  })
    .then(response => {
      if (response.ok) {
        return response.json() // ReadableStream в строку

      }
      // обработка ошибки при ответе статус 400 и выше
      return response.json().then(error => {
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e

      })
    })
}

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const body = {
  name: 'Anton',
  age: 30
}
const body2 = {
  name: 'Anton',
  age: 30
}


sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))