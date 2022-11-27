const article = document.querySelector('article')

// console.log(article.children) // Usando a propriedade children podemos obter um HTMLCollection com TODAS as tags que estão dentro da tag article. Isso incluindo tags inseridas dinamicamente.

// console.log(Array.from(article.children)) // Utilizando um array constructor e o método from, podemos obter em forma de ARRAY um LISTA com todas as tags na tag article.

// Array.from(article.children).forEach(element => {
//   element.classList.add('article-element') // Com a propriedade classList e o método add, posso ADICIONAR uma class em TODAS as tags do index.HTML.
// }) // Element representara cada elemento HTML do array.

const title = document.querySelector('h2')

console.log(title.previousElementSibling) // Com a propriedade previousElementSibling veremos qual é a tag que vem antes do h2, que no caso é nenhuma.