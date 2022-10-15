// Variáveis e escopo de bloco

const age = 20 

if (true) {
  const age = 30 // Podemos criar uma variável de mesmo nome desde que elas não estejam no mesmo escopo. Esse será um escopo LOCAL. Se removermos a const, ela irá se referenciar a variável global.
  const name = 'Leonardo'

  console.log(`Dentro do 1º de código: ${age} ${name}`)

  if (true) {
    const age = 59
    console.log(`Dentro do 2º bloco de código? ${age}`) // Podemos ver que sempre vai pegar o valor do bloco mais próximo.
  }
}

console.log(`Fora do bloco de código: ${age} ${name}`) // Podemos ver que uma variável de escopo local não aparece nesse console.log, apenas no outro.