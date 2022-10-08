// Switch Statement
const grade = 'B'

switch (grade) { // O switch é uma forma de verificar algo de uma variável sem usar diversos if's.
  case 'A': // Caso grade ARMAZENE A, ele irá mostrar no console a seguinte mensagem a baixo:
    console.log('Você tirou um A')
    break // Após o Js achar a nota que dê match na variável grade, ele irá parar e mostrar UMA das mensagens abaixo:
  case 'B': // Caso grade ARMAZENE B, ele irá mostrar no console a seguinte mensagem a baixo:
    console.log('Você tirou um B') // Essa é a mensagem que será exibida
    break // Após o Js achar a nota que dê match na variável grade, ele irá parar e mostrar UMA das mensagens abaixo:
  case 'C': // Caso grade ARMAZENE C, ele irá mostrar no console a seguinte mensagem a baixo:
    console.log('Você tirou um C')
    break // Após o Js achar a nota que dê match na variável grade, ele irá parar e mostrar UMA das mensagens abaixo:
  case 'D': // Caso grade ARMAZENE D, ele irá mostrar no console a seguinte mensagem a baixo:
    console.log('Você tirou um D')
    break // Após o Js achar a nota que dê match na variável grade, ele irá parar e mostrar UMA das mensagens abaixo:
  case 'E': // Caso grade ARMAZENE E, ele irá mostrar no console a seguinte mensagem a baixo:
    console.log('Você tirou um E')
    break // Após o Js achar a nota que dê match na variável grade, ele irá parar e mostrar UMA das mensagens abaixo:
  case 'F': // Caso grade ARMAZENE F, ele irá mostrar no console a seguinte mensagem a baixo:
    console.log('Você tirou um F')
    break // Após o Js achar a nota que dê match na variável grade, ele irá parar e mostrar UMA das mensagens abaixo:
  default: // Caso grade não armazene nenhuma dessas notas, irá aparecer a seguinte mensagem a baixo:
    console.log('Nota inválida')
} 