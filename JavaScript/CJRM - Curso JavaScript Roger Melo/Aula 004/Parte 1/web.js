// Booleans e comparações
console.log(true, false, 'true', 'false') // true e false São booleans, e os outros dois true e false são strings.

// Métodos podem retornar booleans
const email = 'leonardocarmo941@gmail.com'
const includes = email.includes('@') // Se essa string '@' existir dentro de email, a expressão irá retornar true. Se essa mesma string não existir dentro da string email, irá retornar false. E esse boolean retornado, seja ele true ou false, vai ser atribuido para includes.
const names = ['Dio', 'Kanki', 'Griffith']
const arrayIncludes = names.includes('Marshall D. Teach') // Podemos usar também utilizando arrays, e ele funcionará normalmente como qualquer outro boolean.

// console.log(arrayIncludes) // O valor será false, pois 'Marshall D. Teach' não existe dentro desse array.

// Operações de comparação com strings.
const name = 'leonardo'

console.log(name == 'leonardo') // A string 'leonardo', é igual a string 'leonardo'? true.
console.log(name == 'Leonardo') // A string 'leonardo', é igual a string 'Leonardo'? false. Pois na const name = 'leonardo', está iniciando com letra MINUSCULA, e nesta, com letra MAIUSCULA.
console.log(name > 'adriano') // A string 'leonardo', é maior que a string 'adriano'? true. Pois no alfabeto, a letra L vem DEPOIS de A. As ÚLTIMAS letras do alfabeto são MAIORES que as primeiras letras do alfabeto.
console.log(name > 'Leonardo') // A string 'leonardo', é maior que a string 'Leonardo'? true. Pois uma letra MINUSCULA é maior que uma letra MAIUSCULA.
console.log(name > 'Adriano')  // A string 'leonardo', é maior que a string 'Adriano'? true. Pois não apenas a letra L é maior que a letra A, como a letra L em minusculo é maior que a letra A em maiusculo.

// Operações de comparação com números
const age = 31
// console.log(age == 31) // == Representa sinal de igual, e neste caso, ele irá verificar se o valor da const age é realmente igual 31. Neste caso, o valor é igual, então, true.
// console.log(age == 35) // Neste caso, o valor é 35, então, false.
// console.log(age != 31) // Ao colocar !=, irá negar a igualdade. A forma de ler essa expressão seria: "age não é igual a 35, isso é verdade? true."
// console.log(age >= 30) // Irá verificar se 31 é maior que 30. Forma de ler "31 é maior que 30? true".
// console.log(age > 31) // 31 é MAIOR que 31? false. Pois os dois tem o MESMO valor.
// console.log(age < 31) // 31 é MENOR que 31? false. Pois os dois tem o MESMO valor.
// console.log(age <= 31) // 31 é MENOR ou IGUAL que 31? true. Pois eles tem o MESMO valor.
// console.log(age >= 31) // 31 é MAIOR ou IGUAL que 31? true. Pois eles tem o MESMO valor.
