import readlinesync = require("readline-sync")

const raio = readlinesync.questionFloat("Digite o raio do circulo: ")

const areaCirculo = (raio: number) => (Math.PI * (raio * raio)).toFixed(2)

console.log(`A área do círculo é: ${areaCirculo(raio)}`)