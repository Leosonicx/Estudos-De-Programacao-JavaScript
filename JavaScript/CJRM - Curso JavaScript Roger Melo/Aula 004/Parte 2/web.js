const age = 31

// 'Igual a' e 'Diferente de'
// console.log(age == 31)
// console.log(age == '31') // O number 31 é igual a string 31? true. Nessa expressão, antes da comparação de valores serem feitas, a string 31 foi CONVERTIDA para number 31. Ao usar o duplo sinal de == ou sinal de != são usados, uma expressão que envolve tipos diferentes podem ser resultadas em true devo a conversão que o JavaScript faz.

// console.log(age != 31)
// console.log(age != '31') // Essa expressão é a mesma coisa de cima, pois o JavaScript CONVERTE ela de string para number, mas ainda continua sendo diferente.

// 'Igual a, e do mesmo tipo' e 'Diferente de, e do mesmo tipo'
// console.log(age === 31) // === Está dizendo que age, tem o MESMO valor, e o mesmo TIPO que 31. true.
// console.log(age === '31') // Neste caso não acontece conversão, e por não ser o mesmo TIPO que um number, false.

console.log(age !== 31) // O número 31 é diferente do número 31? false.
console.log(age !== '31') // O número 31 é diferente da string 31? true.
