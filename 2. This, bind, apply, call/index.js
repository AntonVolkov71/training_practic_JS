function hello(tt) {
  console.log('Hello', this, tt)
}

const test = {
  name: "Dianela"
}

const person = {
  name: "Anton",
  age: 30,
  // передача контекста этого объекта person
  sayHello: hello,
  // передача контекста объекта window (любого)
  sayHelloWindow: hello.bind(window),
  sayHelloTest: hello.bind(test),
  sayHelloDocument: hello.bind(document),
  sayHelloThis: hello.bind(this),

  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.end
  }
}

const inna = {
  name: "Inna",
  age: 32
}

// BIND
// BIND не вызывает ф-цию, а только привязывет
// без параметров
// person.logInfo.bind(inna)()

// более подробно фукнция которая выше с параметрами
const fnInnaInfoLog = person.logInfo.bind(inna, `Frontend`, '8-999-999-99-99')
fnLenaInfoLog()


// только с параметрами 
// fnLenaInfoLog(`Frontend`, '8-999-999-99-99')

// CALL
// сразу вызывает функцию
person.logInfo.call(inna, `Frontend`, '8-999-999-99-99')

// APPLY
// всегда принимает два параметра (первый контекст, второй массив параметров)
person.logInfo.apply(inna, [`Frontend`, '8-999-999-99-99'])

// CALL & APPLY отличаются способом передачи параметров!!

