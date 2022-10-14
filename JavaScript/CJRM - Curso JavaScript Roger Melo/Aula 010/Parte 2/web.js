// Adicionando métodos
let user = {
  name: 'Leonardo',
  age: 20,
  email: 'leonardocarmo941@gmail.com',
  city: 'Minas Gerais',
  curiositys: ['Jogar', 'Programar', 'Ler'], 
  login: function () {
    console.log('Usuário logado')
  },
  logout: function () {
    console.log('Usuário deslogado')
  }
}

user.login()

user.logout()