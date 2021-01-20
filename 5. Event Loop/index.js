console.log('start')

console.log('start 2')

function timeout2sec() {
  console.log('timeout2sec')
}

window.setTimeout(function () {
  console.log('Inside timeout, after 2 seconds')
}, 5000)

setTimeout(timeout2sec, 0)

console.log('end')
console.log('end')
console.log('end')
console.log('end') 