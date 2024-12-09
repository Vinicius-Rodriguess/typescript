import readlinesync = require("readline-sync")

const numeros: Set<number> = new Set<number>()

for(let i = 0; i < 10; i++) {
    const numeroDigitado = readlinesync.questionInt("Digite um numero inteiro nao repedido: ")
    numeros.add(numeroDigitado)
}

console.log("Listar dados do Set: ")
for(let num of numeros) {
    console.log(num)
}