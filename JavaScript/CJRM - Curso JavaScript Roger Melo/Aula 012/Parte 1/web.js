// Objetos em arrays
let user = {
  name: 'Leonardo',
  age: 20,
  email: 'Leonardocarmo941@gmail.com',
  city: 'Minas Gerais',
  blogPosts: [
    { title: 'Dev Front-End', likes: 348},
    { title: 'UX Designer', likes: 673}, 
    { title: 'Analista de Dados', likes:92} 
  ],
  login () {
    console.log('Usuário logado')
  },
  logout () {
    console.log('Usuário deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => { // Como esse parâmetro tem o objeto blogPosts nele, é possível exibir os title e os likes no console.
      console.log(post.title, post.likes) // post contém blogPosts, title as strings e os likes os numbers.
    })
  }
}

user.logBlogPosts()