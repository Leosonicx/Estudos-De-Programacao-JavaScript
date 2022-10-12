// Utilizando callbacks

const ul = document.querySelector('[data-js= "ul"]')

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
  HTMLTemplate += `<li style="color: deepping;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate