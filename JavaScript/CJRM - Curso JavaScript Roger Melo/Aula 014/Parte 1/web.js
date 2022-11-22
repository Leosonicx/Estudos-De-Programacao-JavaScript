const paragraph = document.querySelector('p') 

// paragraph.innerHTML += ' Salve salve familia' // Utilizando o +, podemos concatenar o texto que já estava no index.HTML com este método do JavaScript.

const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
//   paragraph.innerText += ` Novo texto${index + 1}` // Ao utilizar o método forEach, eu posso ALTERAR o texto sem concatena-lo ou ADICIONAR um novo texto. Tudo isso usando o parâmetro index.
// })

const div = document.querySelector('.content')

// div.innerHTML += '<h2>Novo H2</h2>' // Ao invés de sobrescrever, eu posso CONCATENAR essa tag <h2> do JavaScript com a tag <p> do HTML.

const meuNome = [ 'Leonardo', 'Jonathan', 'Carmo']

meuNome.forEach(eu => {
  div.innerHTML += `<p>${eu}</p>` // Dessa forma eu incluí todos os itens do array meuNome em uma tag <p> criado pelo JavaScript
})

// getter setter