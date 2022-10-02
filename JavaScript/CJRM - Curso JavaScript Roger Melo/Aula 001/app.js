let age = 31 // Uma forma de interpretar essa linha seria: let/deixe age =/receber 31
let currentYear = 2022 // Deixe ano atual receber 2022

console.log(age, currentYear) // Eu posso separar os valores que vão aparecer no console com uma virgula e um espaço em branco.

age = 32 // O JavaScript lê o código de CIMA para BAIXO, ou seja, ao invés dele ler o 31 de da linha 1, ele irá ler o 32 da linha 6. Para fazer um retribuição, não é necessário usar a palavra let novamente.
console.log(age) //Caso eu coloque console.log(age) Ele irá mostrar o código da linha 1 (31) e EM BAIXO irá mostrar o código da linha 6 (32).

const points = 100 //Eu devo usar const CASO eu queria que ele se mantenha um valor fixo, caso contrário e eu queria fazer uma REATRIBUIÇÃO, usamos let.
console.log(points)