import readlinesync = require("readline-sync")

const ddd = readlinesync.questionInt("Digite um DDD: ")

switch (ddd) {
    case 11:
        console.log(`O DDD 11 pertence à cidade de São Paulo`)
    break
    case 21:
        console.log(`O DDD 21 pertence à cidade de Rio de Janeiro`)
    break
    case 27:
        console.log(`O DDD 27 pertence à cidade de Vitória`)
    break
    case 31:
        console.log(`O DDD 31 pertence à cidade de Belo Horizonte`)
    break

    default:
        console.log("DDD não encontrado!")
    break
}