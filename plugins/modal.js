function _createModal(options) {
  const modal = document.createElement("div")
  modal.classList.add("amodal")
  modal.insertAdjacentHTML("afterbegin", `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">Modal title</span>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="modal-footer">
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  `)
  document.body.appendChild(modal)
  return modal
}

/* TODO
* title: string
* closable: boolean для крестика есть нету
* content: string - для контента
* width: string(400px) - ширина модального окна
* destroy(): void убирать из дом дерева и слушатели
* закрытие на крестик и клик вне окна
* ---------------
* публичный метод setContent(html:string):void | PUBLIC - динамически меняется содержимое окна
* onClose():void
* onOpen():void
* beforeClose(): boolean если фолс не закрывается
* ---------------
* animate.css библиотекапосмотреть её
*/
$.modal = function (options) {
  const ANIMATION_SPEDD = 2200
  const $modal = _createModal(options)
  let closing = false

  return {
    open() {
      !closing && $modal.classList.add("open")
    },
    close() {
      closing = true
      $modal.classList.remove("open")
      $modal.classList.add("hide")
      setTimeout(() => {
        $modal.classList.remove("hide")
        closing = false
      }, ANIMATION_SPEDD)

    },
    destroy() { }
  }
}