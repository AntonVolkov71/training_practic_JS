(function () {

  const requestURL = "https://jsonplaceholder.typicode.com/users"

  // XHR (XMLHttpRequest)

  // универсальная функция запрос 
  function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {

      // сначала создаем инстанс
      const xhr = new XMLHttpRequest();

      // откроет соединение
      xhr.open(method, url);

      // либо так либо JSON.parse()
      xhr.responseType = 'json'

      // так как передаем json
      xhr.setRequestHeader('Content-Type', 'application/json');

      // лучше сделать перед отправкой запроса
      xhr.onload = () => {
        // обработка статусов ответа
        if (xhr.status >= 400) {
          reject(xhr.response)
        } else {
          // сразу получаем строку, переводим в объект
          resolve(xhr.response)
        }
      }

      // обработка ошибок
      xhr.onerror = () => {
        reject(xhr.response)
      }

      // по сети можно передавать только строки
      // переводим объект в строку
      xhr.send(JSON.stringify(body));

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

  // sendRequest('POST', requestURL, body)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  // sendRequest('POST', requestURL, body2)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))

})()