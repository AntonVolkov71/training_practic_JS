function MessagesArray() {
  Array.call(this);
  this.callbacks = [];
}

MessagesArray.prototype = Object.create(Array.prototype)
MessagesArray.prototype.constructor = MessagesArray

MessagesArray.prototype.add = function (message) {
  if (message instanceof Array) {
    const messages = this;
    message.forEach(function (item) {
      messages.push(item)
      messages.trigger('add', [item])

    });
  } else {
    this.push(message);
    this.trigger('add', [message])
  }

  // паттерн Observer подписка на изменения

  return this
}

MessagesArray.prototype.remove = function (message) {
  const index = this.indexOf(message);
  if (index === -1) return this

  this.splice(index, 1);

  this.trigger('remove', [message, index])
  return this
}

// паттерн Observer подписка на изменения
MessagesArray.prototype.on = function (event, callback) {
  this.callbacks.push({
    event,
    callback
  })
}

MessagesArray.prototype.trigger = function (event, args) {
  const messages = this;

  args = args || [];

  this.callbacks.forEach(function (item) {
    if (item.event === event){
      item.callback.apply(messages, args)
    }
  })
}