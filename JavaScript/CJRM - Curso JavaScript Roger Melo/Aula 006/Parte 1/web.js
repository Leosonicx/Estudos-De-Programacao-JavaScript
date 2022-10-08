// if e else if statements
const password = '12caracteres!'

if (password.length >= 12) {
  console.log('Senha muito forte!')
} else if (password.length >= 8) {
  console.log('Essa senha tem 8 ou mais caracteres') // Caso isso seja TRUE, essa mensagem irá aparecer.
} else {
  console.log('A senha deve conter 8 ou mais caracteres') // Caso o password seja FALSE, essa mensagem aparece. 
}

/*
Como ler esse código:

1 - Linha 4 - Se a expressão resulta em true, executa esse bloco.
2 - Linha 6 - SE NÃO, se ESSA expressão resultar em true, executa esse bloco.
3 - linha 8 - CASO as expressões if e else resultem em false, executa apenas o bloco do else, que é false.
*/