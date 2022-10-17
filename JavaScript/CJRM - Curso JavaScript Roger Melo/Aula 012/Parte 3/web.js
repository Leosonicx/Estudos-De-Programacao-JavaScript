// Valores primitivos
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100 // Ao modificar o valor da scoreOne (valor primitivo) o scoreTwo não será afetado.

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`) 

// Valores de referência
let userOne = { name: 'Leonardo', age: 20 } // Esse objeto está armazenado no heap.
let userTwo = userOne // Essas duas variáveis estão apontando para o MESMO objeto.

console.log(userOne, userTwo)

userOne.age = 22 // Por apontarem para o mesmo objeto, os DOIS valores serão alterados.

console.log(userOne, userTwo)