$.confirm = function (option) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: option.title,
      width: "400px",
      closable: false,
      content: option.content,
      onClose() {
        modal.destroy()
      },
      footerButtons: [
        {
          text: "Отменить", type: "secondary", handler() {
            modal.close()
            reject()
          }
        },
        {
          text: "Удалить", type: "danger", handler() {
            modal.close()
            resolve()
          }
        },
      ]
    })
    setTimeout(() => {
      modal.open()
    }, 100)

  })
}