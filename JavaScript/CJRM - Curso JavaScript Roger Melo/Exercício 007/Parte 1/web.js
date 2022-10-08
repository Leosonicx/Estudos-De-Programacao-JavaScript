// O operador lógico not (!)

let isUserLoggedIn = false

if (!isUserLoggedIn) { // Inserir o not na frente da variável não irá atribuir true para ela, essa variável CONTINUARÁ sendo false. O que estamos fazendo é apenas trocar a expressão SOMENTE dentro desses parenteses.
  console.log('Você precisa fazer login para continuar')
}

console.log(!true) // Ao colocar ! antes da variável, ela INVERTE o boolean, nesse caso, true vira false.
console.log(!false) // Ao colocar ! antes da variável, ela INVERTE o boolean, nesse caso, false vira true.