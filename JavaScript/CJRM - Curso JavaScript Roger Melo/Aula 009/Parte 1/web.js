// Função tradicional
// const double = function (number) {
//   return number * 2
// }

// arrow function
const double = number => number * 2 // Caso o bloco dela envolva apenas UMA linha, eu posso REMOVER as chaves. E não preciso usar o return pois a arrow function já faz isso automático pra mim. Não é possível retornar desta mesma maneira caso não seja uma expressão.




const result = double(3)
console.log(`O resultado é: ${result}`)