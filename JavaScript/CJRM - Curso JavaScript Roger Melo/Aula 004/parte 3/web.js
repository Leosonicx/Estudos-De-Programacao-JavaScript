// Conversão de tipos
let score = '100'

// score = Number(score) // Ao passar uma string em Number, ela irá ser CONVERTIDA para um número.

// console.log(score + 1) // Caso eu tentasse fazer essa expresão com uma string '100', ele iria me RETORNAR uma string '1001'.
// console.log(typeof score) // typeof verifica o tipo de um valor, irá mostrar se é uma string ou number.

const crazyConversion = Number('Maçã') // Qualquer operação matemática que não faz sentido resulta em NaN(Not a  Number)
const convertedNumber = String(97)
const booleanConversion = Boolean(10)

console.log(booleanConversion, typeof convertedNumber)

/* Valores Falsy:
- false
- 0
- " ", '', ``
- null
- undefined
- NaN

Valores truthy:
- Qualquer valor que não é falsy.
*/