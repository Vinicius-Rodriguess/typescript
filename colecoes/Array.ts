import readlinesync = require("readline-sync")

const numeros: Array<number> = new Array<number>()

numeros.push(7, 1000, 3)
numeros.push(2)
numeros.push(4, 10, 10)
numeros.push(5)

for (let i of numeros) {
    console.log(i)
}

// numeros.push(readlinesync.questionFloat("Digite um numero: "))

numeros.unshift(2, 4.5, 8, 9)

console.log(numeros)

console.log("\nExiste o numero 10 no array? ", numeros.includes(10))
console.log("\nQual é o indice do numero 3 no meu array? ", numeros.indexOf(3))

numeros.splice(numeros.indexOf(10), 1)

console.table(numeros)