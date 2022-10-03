 const postTitle = ' É bolacha ou biscoito?'
const postAuthor = 'Leonardo Carmo'
const postComments = 15

// Usando concatenação
//const postMessage = 'O post "' + postTitle + '", de' + postAuthor + ', tem' + postComments + ' comentários.' // Se eu tentasse substituir as aspas duplas do 'O post "', o JavaScript tentaria interpretar a PRIMEIRA como fechamento da string. 

// console.log('Voce conhece o filme \'As Branquelas?\'') // Colocando aspas simples dentro de aspas simples.

// Usando template strings

// const postMessage = `O post "${postTitle}", de ${postAuthor}, tem ${postComments} comentários.`
//console.log(postMessage)

// Criando template strings
const html = `
 <h2>${postTitle}</h2>
 <p>Autor: ${postAuthor}</p>
 <span>Este post tem ${postComments} comentários</span>
`

console.log(html)