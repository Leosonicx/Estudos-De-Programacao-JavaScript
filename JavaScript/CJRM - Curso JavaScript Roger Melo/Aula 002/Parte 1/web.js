// Strings
console.log('hello, world') //Não importa se eu vou começar as strings com aspas simples ou aspas duplas, só importa que devo fechar com a que eu comecei!

const email = "leonardocarmo941@gmail.com"

console.log(email)

// Concatenação de strings
const firstName = 'Leonardo'
const lastName = 'Carmo'
const fullName = firstName + ' ' + lastName // Uma concantenação de string é junta-las, mas como não há espaço se eu deixar apenas firstName + lastName, é necessário deixar uma string em branco para separa-las.

console.log(fullName)

// Acessando caracteres
console.log(fullName[0]) // Para que eu consiga acessar alguma letra ESPECIFICA da minha string, é necessário colocar [NUMERO AQUI], lembrando que no Js a primeira letra começa do ZERO (0).

// Comprimento de uma string
console.log(fullName.length) // Vai especificar o tamanho de um objeto que tem na string, PORÉM, ele também contará o espaço em branco que deixei na linha 11.

// Métodos de string
console.log(fullName.toUpperCase()) // São funções de String, e uma função é um PEDAÇO de código que existe uma função específica. E um método é uma função que está ASSOCIADA a um objeto ou um tipo de dado em particular
// Os métodos devem utilizar () para que sejam ativados.
const result = fullName.toLowerCase()

console.log(result)
// É importante saber que os métodos toUpperCase e toLowerCase não modificam o valor original no qual eles estão executando a ação. Alguns métodos modificam, outros métodos não.

const index = email.indexOf('@') // O métodos indexOf vai permitir que eu encontre um caractere dentro de um objeto, no caso aqui ele vai procurar o @ dentro do email da linha 4. O nome da aspas simples dentro do método é chamada de ARGUMENTO, e não parâmetro.

console.log(index)