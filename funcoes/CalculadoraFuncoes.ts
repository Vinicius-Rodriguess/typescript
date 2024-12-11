import readlinesync = require("readline-sync")
import { colors } from "../util/Cores"

let numero1: number
let numero2: number
let opcao: number

do {

    menu()

    opcao = readlinesync.questionInt()

    if (opcao === 0) {
        about()
        process.exit(0)
    }

    [numero1, numero2] = obterNumeros()

    switch (opcao) {
        case 1:
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
        break
        case 2:
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`)
        break
        case 3:
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`)
        break
        case 4:
            const resultado = dividir(numero1, numero2)
            if (resultado !== null) console.log(`${numero1} / ${numero2} = ${resultado}`)
            else console.log("Não existe divisão por zero!")
        break
        default:
            console.log("Opção invalida!")
    }


} while(true)

function menu(): void {
    console.log(colors.bg.black, colors.fg.green, "**********************************")
    console.log("            Calculadora           ")
    console.log("**********************************")
    console.log("       1 - Soma                   ")
    console.log("       2 - Subtrair               ")
    console.log("       3 - Multiplicação          ")
    console.log("       4 - Dividir                ")
    console.log("       0 - Sair                   ")
    console.log("**********************************")
    console.log("Digite a opção desejada: ", colors.reset)
}

function obterNumeros(): number[] {
    const numero1 = readlinesync.questionFloat("Digite o primeiro numero: ")
    const numero2 = readlinesync.questionFloat("Digite o segundo numero: ")
    return [numero1, numero2]
}

function somar(num1: number, num2: number): number {
    return num1 + num2
}

function subtrair(num1: number, num2: number): number {
    return num1 - num2
}

function multiplicar(num1: number, num2: number): number {
    return num1 * num2
}

function dividir(num1: number, num2: number): number | null {
    let divisao = num1 / num2
    return (divisao !== Infinity ? divisao : null)
}

function about(): void {
    console.log("Criado por Vinicius")
}