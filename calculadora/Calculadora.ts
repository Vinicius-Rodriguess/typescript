import readlinesync = require("readline-sync")

let numero1: number
let numero2: number

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ")
numero2 = readlinesync.questionFloat("Digite o segundo numero: ")

console.log(`A soma dos 2 numeros é igual a ${numero1 + numero2}`)
console.log(`A subtracao dos 2 numeros é igual a ${numero1 - numero2}`)
console.log(`A multiplicacao dos 2 numeros é igual a ${numero1 * numero2}`)
console.log(`A divisao dos 2 numeros é igual a ${numero1 / numero2}`)