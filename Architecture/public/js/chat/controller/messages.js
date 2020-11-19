function messagesController(){

  messagesView(messages, {
    onDelete: function (message) {
      messages.remove(message)
    }
  })

  messageInputView({
    onText: function (text) {
      messages.add({text})
    }
  })
}