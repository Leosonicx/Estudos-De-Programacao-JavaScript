const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault() 

  console.log(event.target.username.value)
})

// const IsAMatch = pattern.test(username)

// if (IsAMatch) {
//   console.log('O teste da regex passou!')
// } else {
//   console.log('Infelizmente, o teste da regex não passou!')
// } 

const username = '123leonardo'
const pattern = /^[a-z]{7,}$/
const result = username.search(pattern)

console.log(result)