// const paragraph = document.querySelector('p')

// console.log(paragraph.classList) // A propriedade classList mostrará todas as class que estão no querySelector usado.

// paragraph.classList.add('error') // Ao utilizar o método add e invoca-lo com uma class dentro, podemos ADICIONAR uma class no index.HTML

// paragraph.classList.remove('error') // Utilizando o método remove, podemos invocar um class que desejamos remover.

// paragraph.classList.add('success')

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(paragraph => {
//   if (paragraph.textContent.includes('error')) { // Tradução rápida do código: SE o parametro que contem a variável ter o texto 'error', nós iremos incluir ele como uma classe também.
//     paragraph.classList.add('error') 
//   }

//   if (paragraph.textContent.includes('success')) { // Tradução rápida do código: SE o parametro que contem a variável ter o texto 'success', nós iremos incluir ele como uma classe também.
//     paragraph.classList.add('success')
//   }
// })

const title = document.querySelector('h1')

title.classList.toggle('test') // O método toggle permite que quando um elemento não tenha uma class que seja a mesma que está no argumento, você consegue ADICIONAR uma a ele.

title.classList.toggle('test') // Se repetirmos o processo e usar o método no mesmo argumento, a class adicionada por ele será REMOVIDA.