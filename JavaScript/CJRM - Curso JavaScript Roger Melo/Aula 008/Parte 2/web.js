// Argumentos, parâmetros e default parameters
const myFunc = function (name = 'Leonardo', lastName = 'Carmo') { // Para prevenir undefined caso eu não defina um argumento em myFunc, eu posso atribuir uma string na propria function.
  console.log(`Oi, ${name} ${lastName}!`) 
}

myFunc() // Ao deixar sem argumentos, ele irá receber undefined.
myFunc('Leozinho', 'Caralho') // Se eu atribuir 2 argumentos aqui, ele irá sobrescrever os dois valores da const myFunc. E caso eu deixasse somente UM, ele iria sobrescrever o primeiro e o segundo manteria o da const.