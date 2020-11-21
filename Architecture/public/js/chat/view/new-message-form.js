// эта view генерит данные, ничего не принимает, кроме callback
// для того чтобы вернуть данные вызывается колбек
function newMessageFormView(selector, callbacks) {

  const form = $(selector);
  const textInput = form.find('[name="text"]')

  form.on('submit', function () {
    event.preventDefault();

    const text = textInput.val().trim()

    if (!text) return

    // form.find('button').prop('disabled', true)
    form.addClass('loading')
    callbacks.onSend(textInput.val())
    //     .then(function () {
    //       form.removeClass('loading')
    //     })
    // // .catch(function () {
    // //   form.removeClass('loading')
    // //   form.addClass('error')
    // //
    // // })
  })

  return {
    clear: function () {
      textInput.val('')
    }

  }
}