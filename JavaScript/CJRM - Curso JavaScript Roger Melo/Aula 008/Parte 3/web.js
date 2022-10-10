// Retornando valores
const double = function (number) {
  return number * 2 // É possível fazer tudo aquilo, dessa forma aqui. Eu posso fazer das duas formas.
}

const result = double(3) // Ao fazer isso, eu faço uma função RETORNAR o valor.

const showResult = function (value) {
  return `O resultado é: ${value}`
}

console.log(showResult(result)) // Usando result como argumento da Showresult, iremos fazer com que o valor seja devolvido fora do bloco da função.