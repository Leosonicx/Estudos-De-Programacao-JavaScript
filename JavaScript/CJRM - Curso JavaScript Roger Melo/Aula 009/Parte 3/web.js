// forEach e callbacks
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => { // Ao desacoplar do forEach, o código vai ficar mais legivel, organizado e essa função poderá ser reutilizada em algum outro lugar do código.
  console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)