let fruits = [
  { id: 1, title: "Яблоки", price: 20, img: "https://images.unsplash.com/photo-1587851932297-b66f1f61f7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
  { id: 2, title: "Апельсины", price: 30, img: "https://images.unsplash.com/photo-1586439702132-55ce0da661dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" },
  { id: 3, title: "Манго", price: 40, img: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" },
]

const toHTML = fruit => `
  <div class="col">
      <div class="card">
        <img style="height: 300px;" src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>            
          <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
        </div>
      </div>
    </div>
`
const modalOptions = {
  title: "Цена товар",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Закрыть", type: "primary", handler() {
        priceModal.close()
      }
    },
  ]
}

function render() {
  const html = fruits.map(toHTML).join('')
  document.querySelector("#fruits").innerHTML = html
}
render()

const priceModal = $.modal(modalOptions)

document.addEventListener("click", event => {
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const fruit = fruits.find(f => f.id === id)

  if (btnType === "price") {
    event.preventDefault()
    priceModal.setContent(`
    <p>Цена на ${fruit.title}: <strong>${fruit.id}$</strong></p>
    `
    )
    priceModal.open()
  } else if (btnType === "remove") {
    $.confirm({
      title: "Вы уверены",
      content: `<p>Вы удаляете фрукт:  <strong>${fruit.title}</strong></p>`
    })
      .then(() => {
        fruits = fruits.filter(f => f.id !== id)
        render()
      })
      .catch(() => {
        console.log("catch")
      })
  }
})


