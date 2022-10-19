// // Obter um elemento através do ID
// const title = document.getElementById('title') // o getElementById é uma forma de buscar algum elemento que contenha um ID.

// console.log(title)

// // Obter elementos através do nome da class.
// const error = document.getElementsByClassName('error') 

// console.log(error[1]) // Podemos obter um elemento especifico usando colchetes, mas ao contrário de um NodeList, não podemos usar um forEach em um HTMLColecction

// Obter elementos através do nome da tag
const paragraphs = document.getElementsByTagName('p') // Essa expressão irá dar em um HTMLCollection com todas as tags <p> que a página ter.

console.log(paragraphs)