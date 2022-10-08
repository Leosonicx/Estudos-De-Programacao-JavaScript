// Operadores lógicos - "OU" || e "E" &&
const password = '1'

if (password.length >= 12 && password.includes('1')) { // && - Significa que se a senha conter 12 caracteres E ter o número 1, essa expressão irá ser considerada true. Se UMA DAS DUAS condições resultarem em false, ele irá mudar para o else if.
  console.log('Senha muito forte!')
} else if (password.length >= 8 || password.includes('1') && password.length >=5) { // Caso a senha tenha mais de 8 caracteres, a expressão será considerada true. PORÉM, caso ela tenha o número 1 nela, independente se ela tem 8 caracteres ou não, será considerado true. Para que essa senha seja considerada true agora, é necessário que password tenha mais ou igual 5 caracteres.
  console.log('Essa senha tem 8 ou mais caracteres OU tem o número 1 nela.')
} else {
  console.log('A senha deve conter 8 ou mais caracteres') 
}