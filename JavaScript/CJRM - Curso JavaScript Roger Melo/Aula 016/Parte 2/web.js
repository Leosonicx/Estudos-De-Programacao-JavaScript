const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => { // Desta forma farei com que o evento copy ao copiar um texto, exiba "Texto copiado" no console.
  console.log('Texto copiado')
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
  div.textContent = `X ${event.offsetX} e Y ${event.offsetY}` // Usando o textContent para exibir no HTML, podemos ver que exibirá na box a posição atual do cursor.
})

document.addEventListener('wheel', event => { 
  console.log(event.pageX, event.pageY) // Dessa forma exibiremos no console a atual posição do mouse relacionada com a barra de rolagem.
})