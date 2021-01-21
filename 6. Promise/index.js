console.log("Request data...")

// Пример при использовании колбеков, пока не закончится одна операция другая не начнется
// setTimeout(() => {
//   console.log("Preparing data...")

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data recevied', backendData)
//   }, 2000)
// }, 2000)

// тоже при оспользовании промиса Promise
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparing data...")
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    }
    // возвращение данных из промиса!!!!!
    // успешно
    resolve(backendData)

    // не успешно
    // reject("error")
  }, 2000)
})


// асинхронная функция после выполнения промиса
p.then((data) => {

  // // Простой способ особо не отличается от колбеков
  // // уже следующий промис
  // const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     data.modified = true
  //     resolve(data)
  //   }, 2000)
  // })

  // // уже след функция после промиса
  // p2.then((clientData) => {
  //   console.log("data receives", clientData)
  // })


  // ТАК ЛУЧШЕ!!!! один уровень вложенности
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)

      // проброс ошибки
      //reject(data)
    }, 2000)
  })
})
  .then(clientData => {
    clientData.fromPromise = true
    return clientData
  })
  .then(data => {
    console.log("Modified", data)
  })
  // обработка ошибок
  .catch(error => {
    console.error("Error: ", error)
  })
  // выполнение в любом случае
  .finally(() => {
    console.log("Finally")
  })



// ПРИМЕР, вместо сеттаймаута!!!!!!!!!!!!!
const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

// использование sleep типа отсрочка на какое-то время
sleep(2000).then(() => console.log("After 2 sec"))
sleep(3000).then(() => console.log("After 3 sec"))


// Выполнение чего-либо после всех промисов
// для запросов сервера
Promise.all([sleep(2000), sleep(5000)])
  .then(() => {
    console.log("After ALL promises")
  })

// Выполнение чего-либо после первого ВЫПОЛНЕНЕНОГО промиса, а не по порядку!!!
Promise.race([sleep(5000), sleep(2000)])
  .then(() => {
    console.log("Race ALL promises")
  })