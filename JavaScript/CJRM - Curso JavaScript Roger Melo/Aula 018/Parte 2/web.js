const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault() 

  const username = event.target.username.value
  const isAValidUsername = testUsername(username)

  if (isAValidUsername) {
   feedback.textContent = 'Username válido! :)'
   return
  }

  feedback.textContent = 'Username inválido! Deve conter entre 6-12 caracteres e apenas letras. :('
})

form.username.addEventListener('keyup', event => {
  const isAValidusername = testUsername(event.target.value)

  if (isAValidusername) {
    form.username.setAttribute('class', 'success') // Caso o username bata com o regex, irá adicionar a class success.
    return
  }

  form.username.setAttribute('class', 'error') // Caso o username NÃO bata com o regex, irá adicionar a class error.
})