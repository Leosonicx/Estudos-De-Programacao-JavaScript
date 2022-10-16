// A palavra-chave this
let user = {
  name: 'Leonardo',
  age: 20,
  email: 'Leonardocarmo941@gmail.com',
  city: 'Minas Gerais',
  courses: ['Programador', 'Analista de Dados', 'UX Designer', 'Suporte de TI'],
  login () {
    console.log('Usuário Logado')
  },
  logout () {
    console.log('Usuário deslogado')
  },
  logCourses () { // Dessa forma o JavaScript também entende que este código funciona.
    console.log(`${this.name} Tem as seguintes qualificações: `) 

    this.courses.forEach(post => {
      console.log(post)
    })
  }
}

user.logCourses() 
