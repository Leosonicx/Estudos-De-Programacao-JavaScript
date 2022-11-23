const link = document.querySelector('a')

// console.log(link.getAttribute('href')) // Invocando o método getAttribute, podemos invocar uma string com o nome do atributo na qual queremos obter o valor. Dessa forma irá aprecer APENAS o link que coloquei no Linkedin.

link.setAttribute('href', 'www.linkedin.com/in/leonardo0608') // A invocação deste método recebe DOIS argumentos, sendo o primeiro o nome do atributo que queremos modifica o segundo o valor que queremos INSERIR no argumento.

link.innerText = 'Antigo link do Linkedin.' // Usando o método innerText podemos alterar o texto do link.

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class')) // Desta forma, veremos apenas o conteúdo que está dentro de class no console.

paragraph.setAttribute('class', 'sucess') // Desta forma, alterei o VALOR da CLASSE do elemento, ao invés de ser class="error", agora é class="sucess"

paragraph.setAttribute('style', 'color: red') // Não importa se o atributo style não existe no elemento, pois se não existir, o JavaScript criara ele e fará ele receber o valor que colocamos nele em seguida.