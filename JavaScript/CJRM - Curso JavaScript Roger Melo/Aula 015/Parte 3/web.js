const ul = document.querySelector('ul')

// ul.remove() // Este elemento vai te permitir remover uma tag do index.HTML

const list = document.querySelectorAll('li')

list.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target 

    clickedElement.remove() // Usando o elemento remove(), eu poderei fazer com que cada click remova um item da lista.
  })
}) 

const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Outro método'
  ul.prepend(li) // O método append insere como PRIMEIRO filho de um elemento citado no querySelector.
})