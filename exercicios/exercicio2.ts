import readlinesync = require("readline-sync")

const tempoEmHoras = readlinesync.questionInt("Digite o tempo gasto na viagem (em horas): ")
const velocidadeMedia = readlinesync.questionInt("Digite a velocidade média (em KM por horas): ")
const redimento = 12

const calcCombustivel = (tempo: number, velocidade: number) => ((tempo * velocidade) / redimento).toFixed(2)

console.log(`Total de combustível gasto (em litros): ${calcCombustivel(tempoEmHoras, velocidadeMedia)}`)