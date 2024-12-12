import readlinesync = require("readline-sync")

const valorA = readlinesync.questionFloat("Digite valor A: ")
const valorB = readlinesync.questionFloat("Digite valor B: ")
const valorC = readlinesync.questionFloat("Digite valor C: ")

if (valorA >= (valorB + valorC) ||
    valorB >= (valorA + valorC) ||
    valorC >= (valorA + valorB)) {
    console.log("NÃO FORMA TRIÂNGULO")

} else if(valorA === valorB && valorA === valorC) {
    console.log("TRIÂNGULO EQUILÁTERO")

} else if(valorA === valorB && valorA !== valorC) {
    console.log("TRIÂNGULO ISÓSCELES")

} else if(valorA !== valorB  &&
    valorA !== valorC &&
    valorB !== valorC) {
    console.log("TRIÂNGULO ESCALENO")
}