const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
  event.preventDefault() 

  const username = event.target.username.value
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  const isAValidUsername = usernameRegex.test(username)

  if (isAValidUsername) {
   feedback.textContent = 'Username válido! :)'
   return // Para evitar o else podemos usar o return
  }

  feedback.textContent = 'Username inválido! Deve conter entre 6-12 caracteres e apenas letras. :(' // Essa linha pode funcionar como um else após dar return no if de cima.
})