import readlinesync = require("readline-sync")

const numeros = []

for (let i = 0; i < 3; i++) {
    numeros.push(readlinesync.questionInt(`Digite o ${i+1} numero inteiro: `))
}

console.log(`Sequência original: ${numeros}`)

console.log(`Ordem crescente: ${numeros.sort((a,b) => a - b)}`)

console.log(`Ordem decrescente: ${numeros.sort((a,b) => b - a)}`)