function messagesController() {

  messagesView('#messages', messages, {
    onDelete: function (message) {
      messages.remove(message)
    }
  })

  const form = newMessageFormView('#new-message-form', {
    onSend: function (text) {
      messages.add({text})
      form.clear()
      // return $.ajax('asd').catch(function (error) {
      //   form.showError(error.message)
      //   //form.setState('error')
      //
      //   // можно вызвать тоастр отдельная вьюха или библиотека
      //
      // })
    }
  })
}