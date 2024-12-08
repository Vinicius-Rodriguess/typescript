import readlinesync = require("readline-sync")

const cores: Array<string> = new Array<string>()

for(let i = 0; i < 5; i++) {
    const corDigitada = readlinesync.question("Digite uma cor: ").toLowerCase()
    cores.push(corDigitada)
}

console.log("Listar todas as cores: ")
for (let cor of cores) {
    console.log(cor)
}

console.log("\nOrdenar as cores: ")
const coresOrdenadas = cores.sort()
for (let cor of coresOrdenadas) {
    console.log(cor)
}