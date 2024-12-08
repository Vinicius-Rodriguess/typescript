import readlinesync = require("readline-sync")

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6])
const numeroDigitado = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ")

if (numeros.has(numeroDigitado))
    console.log(`O número ${numeroDigitado} foi encontrado!`)
else
    console.log(`O número ${numeroDigitado} não foi encontrado!`)