// for loop
const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) { // names.length só irá ler os 3 arrays, logo, o código irá fazer 0,1,2 e dar false.
  const HTMLTemplate = `<p>${names[i]}</p>`
  console.log(HTMLTemplate)
}