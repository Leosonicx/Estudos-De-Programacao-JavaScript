// Inteiros e Decimais
const radius = 10 // Raio do circulo e área
const pi = 3.14 // Para representar numeros decimais em JavaScript, usamos PONTO (.) ao invés de VÍRGULA (,)

// Operadores Aritméticos
const area = pi * radius ** 2 // Pi VEZES (*) Área (radius) ELEVADO (**) ao Quadrado

// Ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2

// Operadores de incremento e decremento
let postLikes = 10 // Lembrando: Não é possível fazer uma variável usando uma const, afinal, o valor da const sempre é fixo!

// Operadores addiction, subtracion, multiplication e division assignment

// NaN - not a number
// console.log(7 / 'oi') // Se eu tentei fazer uma operação, e deu o valor NaN, é porque tentei fazer alguma operação que não fez sentido.

// Concatenação de string com números
const likesMessage  = 'O post tem ' + postLikes + ' likes.' // O resultado entra uma concatenação entre number e string, sempre será string.

console.log(likesMessage)