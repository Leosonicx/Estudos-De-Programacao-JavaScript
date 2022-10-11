const name = 'Leonardo'

// funções
const sayHi = () => 'Oi'

const greet = sayHi() // Quando invocamos uma função dessa forma, obtemos o valor que ela retorna (Que é a string 'oi) e armazena a string na const greet.

console.log(greet)

// métodos
const nameInUpperCase = name.toUpperCase() // Para invocar um método basta colocar ponto (.), exemplo: Caso eu queira colocar a variavel name = "Leonardo" em maiusculo, basta apenas invocar o método com um ponto (.)
console.log(nameInUpperCase)