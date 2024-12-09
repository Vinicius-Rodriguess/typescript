import readlinesync = require("readline-sync")
import { Queue } from "./Queue"

const fila = new Queue<string>()

let instrucao = 1

while(instrucao !== 0) {

    instrucao = readlinesync.questionInt(
        `
        1: Adicionar Cliente na fila
        2: Listar todos os Clientes
        3: Retirar Cliente da Fila
        0: Sair:`
    )

    switch (instrucao) {
        case 0:
            console.log("\nPrograma Finalizado!")
            break

        case 1:
            const novoCliente = readlinesync.question("\nDigite o nome: ")
            fila.enqueue(novoCliente)
            console.log("\nCliente Adicionado!")
            break

        case 2:
            console.log("\nLista de Clientes na Fila: ")
            console.log(fila.printQueue())
            break
        case 3:
            console.log("\nO cliente foi chamado " + fila.dequeue())
            break
    
        default:
            console.log("\nDigite um comando valido!")
            break
    }
}