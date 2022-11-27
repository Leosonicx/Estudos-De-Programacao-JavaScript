const button = document.querySelector('button')

button.addEventListener('click', () => { 
 console.log('Clicou no Botão!!!') // A função só será executada depois do evento 'click' acontecer.
})

const list = document.querySelectorAll('li')

list.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target 

    clickedElement.style.textDecoration = 'line-through' // Ao clicar na LI veremos que uma linha style no index.html será inserida imediatamente.
  })
}) 