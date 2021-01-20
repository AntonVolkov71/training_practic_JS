function  usersView(selector, users){
  const list = $(selector)
  const template = list.find('> li').detach()

  users.forEach(function (user) {
    const userElement = template.clone()
    userElement.find('[data-name]').text(user.name)
    list.append(userElement)
  })
}