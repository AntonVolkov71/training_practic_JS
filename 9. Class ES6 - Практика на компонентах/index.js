
// класс принимает селектор и имеет два метода скрытия и октрытия этого элемента HTML
class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'

  }
}

// принимает набор опций для элемента
class Box extends Component {
  constructor(options) {
    super(options.selector)
    // после вызова super доступна $el
    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.background = options.background

  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  background: 'red',
})
const box2 = new Box({
  selector: '#box2',
  size: 150,
  background: 'blue',
})


// круг но наследуется от класса Box
class Circle extends Box {
  constructor(options) {
    super(options)
    this.$el.style.borderRadius = "50%"
  }
}
const c = new Circle({
  selector: '#circle',
  size: 90,
  background: 'green',
})


// открыть/закрыть
setTimeout(() => {
  box1.hide()

}, 1000)

setTimeout(() => {
  box1.show()

}, 2000)
