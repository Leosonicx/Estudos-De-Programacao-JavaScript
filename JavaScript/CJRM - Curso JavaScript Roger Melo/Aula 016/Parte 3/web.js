const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const classeClicada = event.target.classList[0]
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosePopup = classNames.some(className =>
     className === classeClicada) 
     // O método some vai verificar se pelo menos um item desse array atende a condição que iremos especificar dentro desse método. Se pelo menos um item desse array atender essa condição, ele irá retornar true, caso nenhum atenda, ele irá retornar false.


  if (shouldClosePopup) {

    popup.style.display = 'none'
  }
})