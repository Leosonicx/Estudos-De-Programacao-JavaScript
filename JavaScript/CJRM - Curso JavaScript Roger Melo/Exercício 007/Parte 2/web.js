// break e continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue // Vai pular o número 0 e irá fazer o loop ser continuado.
  }

  console.log(`Sua pontuação ${scores[i]}`)

  if (scores[i] === 100) {
    console.log('Parabéns, você atingiu a pontuação máxima')

    break // Ao usar break, no momento em que o score chegar no número 100, TODO o código do loop irá ser ignorado. Ignorando então o [20, 10] da variável scores.
  }
}