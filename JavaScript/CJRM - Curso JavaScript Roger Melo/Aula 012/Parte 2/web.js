// O Objeto math
console.log(Math)
console.log(Math.PI) // Mostra o número PI.
console.log(Math.E) // Mostra a base dos algoritmos naturais.

const area = 7.7

console.log(Math.round(area)) // O método round converte um número decimal em inteiro. Se o decimal do número é o valor abaixo de .5 (4 ou menos) o número vai ser arredondado pra baixo. Se o decimal do número é .5 ou maior, o número é arredondado para cima.
console.log(Math.floor(area)) // Esse método sempre irá arredondar um número para baixo, mesmo que seja igual ou maior que .5.
console.log(Math.ceil(area)) // Esse método sempre irá arredondar um número para cima, idependente da parte decimal dele.
console.log(Math.trunc(area)) // Ele irá remover o decimal desse número que ele tem como argumento e retornar a parte INTEIRA dele.

// Números aleatórios:
const randomNumber = Math.random() // SEMPRE irá gerar um número aleatório, independente de quantos F5 você pressione.

console.log(randomNumber)

console.log(Math.round(randomNumber * 100)) // Irá criar um gerador de 0 a 100. Posso eu mesmo decidir até onde chegará o gerador multiplicando o randomNumber diversas vezes!