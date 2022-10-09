// Function declaration
function sayHi () { // Uma função pode ser criada uma vez para repetir o processo diversas vezes de forma minimizada como mostra o sayHi la em baixo.
  console.log('oi')
}

sayHi() // Após usar function em uma variável, é necessário invocar ela, e sempre que a invocarmos, ela irá fazer o processo do bloco de código da linha 2.
sayHi()
sayHi()

// Function expression
const showFood = function () { // Não há diferenças além do que eu cito em "functions expressions invertidas" a baixo.
  console.log('pizza')
}

showFood()
showFood()
showFood()