import readlinesync = require("readline-sync")

const tempoEmSeg = readlinesync.questionInt("Digite o tempo: ")

const calcHoras = (seg: number) => Math.floor((seg / 3600))
const calcMinutos = (seg: number) => Math.floor((seg % 3600) / 60)
const calcSeg = (seg: number) => seg % 60

const tempoFormatado = `${calcHoras(tempoEmSeg)}:${calcMinutos(tempoEmSeg)}:${calcSeg(tempoEmSeg)}`
console.log(tempoFormatado)