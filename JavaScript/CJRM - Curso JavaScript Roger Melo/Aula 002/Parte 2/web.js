// Métodos comuns de strings

const email = 'leonardocarmo941@gmail.com'

// const lastIndexOfA = email.lastIndexOf('a') // Digamos que queremos saber o index (Ou saber em que número o último caractere A estará) da ultima ocorrencia, no caso, A como argumento de lastIndexOf. Não altera o valor ORIGINAL.

// const emailSlice = email.slice(0, 16) Vai permitir que eu escolha DE ONDE e ATÉ ONDE eu queira que uma string comece. Por exemplo, ali eu só quis que chegasse até leonardocarmo941. Não altera o valor ORIGINAL.

const emailReplace = email.replace('l', 'y') // O replace irá SUBSTITUIR o caractere de uma string, por outro! O primeiro argumento, é a string que queremos substituir, e o segundo, será o substituto.

console.log(emailReplace)