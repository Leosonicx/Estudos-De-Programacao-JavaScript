// Arrays
let heroes = ['Shin', 'Luffy', 'Guts'] //[ ] Inicia um array.
const ages = [31, 25, 39, 40, 25]
const randomArray = ['Sun Jin Woo', 'Arthur', 'Desir Arman', 20] // Não faz muito sentido porque os Arrays normalmente são utilizados para armazenar os MESMOS tipos de dados. Mas também é possível fazer isso aqui.

// Métodos de arrays
const joinHeroes = heroes.join( '|' ) // join irá retornar uma nova string com todos os itens do array concatenados e separados por virgula. Como ele é um ARGUMENTO opcional, nós podemos colocar ' ' e colocar um separador ( | )
const indexOf25 = ages.indexOf(25) // Mesmo após ter DOIS 25 no const ages, ele irá mostrar apenas o primeiro. Mas e se colocassemos um argumento que não tivesse no ages? Ele iria retornar como -1
const moreHeroes = heroes.concat(['Naruto', 'Goku']) // Adiciona novos argumentos no array.
const pushToHeroes = heroes.push('Midorya', 'Ichigo') // Método que altera o valor original.
const popHeroes = heroes.pop() // Ele irá mostrar apenas Ichigo, porque esse método mostra remove o último item do array e retorna apenas esse item. O Ichigo agora fazer parte APENAS de popHeroes, mesmo que ele não apareça, ele está aqui.

console.log(popHeroes) // Se eu exibisse o heroes aqui, o Ichigo não iria mais fazer parte.