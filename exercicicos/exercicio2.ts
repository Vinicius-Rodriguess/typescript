import readlinesync = require("readline-sync")

const numeros: Array<number> = [2,5,1,3,4,9,7,8,10,6]
const numeroDigitado = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ")

if (numeros.includes(numeroDigitado))
    console.log(`O número ${numeroDigitado} está localizado na posição: ${numeros.indexOf(numeroDigitado)}`)
else
    console.log(`O número ${numeroDigitado} não foi encontrado!`)