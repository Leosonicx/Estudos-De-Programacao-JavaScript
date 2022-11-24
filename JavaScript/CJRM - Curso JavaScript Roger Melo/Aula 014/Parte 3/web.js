const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px;') // Ao utlizar o método setAttribute, o style do index.HTML foi sobrescrito pela a do JavaScript.

console.log(title.style) // A propriedade style mostra todas as propriedades que podemos usar no CSS.

console.log(title.style.color) // Dessa forma poderemos ver o valor que essa propriedade tem, que no caso, é blue.

title.style.margin = '50px' // Utilizando a propriedade margin podemos adicionar novos estilos sem sobrescrever estilos anteriores.

title.style.color = 'blue' // Dessa forma podemos sobrescrever uma cor já armazenada no index.HTM.

title.style.fontSize = '5rem' // No CSS para alterar uma fonte ficaria como "Font-size: 5rem", mas se tentar isso com JavaScript ele irá tentar SUBTRAIR. Então é necessário usar o camelCase para setar esta propriedade.

title.style.margin = ''
title.style.fontSize = ''
title.style.color = '' // Para remover o valor de uma propriedade, basta apenas deixa-lo com a string vazia.
