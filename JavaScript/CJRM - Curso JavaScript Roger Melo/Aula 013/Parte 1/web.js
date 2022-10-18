// function myFunc () {
//   let cat = 'zeca'
//   const age = 3
//   var color = 'cinza'
//   console.log(age) // Irá mostrar apenas o age DESTE bloco.
// }

// function myFunc2 () {
//   const age = 5
//   var color = 'branco'
//   console.log(age) // Irá mostrar apenas o age DESTE bloco.
// }

// myFunc()
// myFunc2()

// const dog = 'Raça-mista'

// function dogWatch () {
//   const dog = 'Simba'
//   console.log(dog)
// }

// dogWatch()
// console.log(dog)

// if (true) {
//   var dragon = 'Balerion'
//   console.log(dragon) 
// }

// console.log(dragon) // Irá mostrar dois consoles, pois a var não especifica um escopo.

const external = () => {
  const book = 'Sapiens'

  const internal = () => {
    const book = 'Harry Potter'
    console.log(book.toUpperCase())
  }

    const extraInteral = () => {
      console.log(book.toLocaleUpperCase) // Irá achar a variavel da interal, pois é o escopo mais bloco.
    }

  internal() 
}

external()