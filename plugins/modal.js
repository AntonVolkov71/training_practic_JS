Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}

function noop(){}

function _createModalFooter(buttons = []) {
  if (buttons.length === 0) {
    return document.createElement("div")
  }
  const wrap = document.createElement("div")
  wrap.classList.add("modal-footer")

  buttons.forEach(btn=>{
    const $btn = document.createElement('button')
    $btn.textContent = btn.text
    $btn.classList.add("btn")
    $btn.classList.add(`btn-${btn.type || 'seondary'}`)
    $btn.onclick = btn.handler || noop

    wrap.appendChild($btn)
  })

  return wrap
}

function _createModal({ title, content, closable, width, footerButtons }) {
  const DEFAULT_WIDTH = "600px"
  const modal = document.createElement("div")
  modal.classList.add("amodal")
  modal.insertAdjacentHTML("afterbegin", `
    <div class="modal-overlay" data-close="true">
      <div class="modal-window" style="width: ${width || DEFAULT_WIDTH} ">
        <div class="modal-header">
          <span class="modal-title">${title || "Окошко"}</span>
           ${closable ? `<span class="modal-close" data-close="true">&times;</span>` : ""}  
        </div>
        <div class="modal-body" data-content>
          ${content || ""}
        </div>
       
      </div>
    </div>
  `)
  const footer = _createModalFooter(footerButtons)
  footer.appendAfter(modal.querySelector("[data-content]"))
  document.body.appendChild(modal)
  return modal
}

/* TODO
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
  let destroyed = false

  const modal = {
    open() {
      if (destroyed) {
        return console.log("Modal is destroyed")
      }
      !closing && $modal.classList.add("open")
    },
    close() {
      closing = true
      $modal.classList.remove("open")
      $modal.classList.add("hide")
      setTimeout(() => {
        $modal.classList.remove("hide")
        closing = false
        if (typeof options.onClose === 'function') {
          options.onClose()
        }  
      }, ANIMATION_SPEDD)
    },


  }

  const listener = event => {
    event.target.dataset.close && modal.close()

  }

  $modal.addEventListener("click", listener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener("click", listener)
      destroyed = true
    },
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html
    }
  })
}