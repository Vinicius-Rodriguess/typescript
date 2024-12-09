import readlinesync = require("readline-sync")
import { Stack } from "./Stack"

const pilha = new Stack<string>()

let instrucao = 1

while(instrucao !== 0) {

    instrucao = readlinesync.questionInt(
        `
        1: Adicionar Livro na Pilha
        2: Listar todos os Livros
        3: Retirar livro da Pilha
        0: Sair:`
    )

    switch (instrucao) {
        case 0:
            console.log("\nPrograma Finalizado!")
            break

        case 1:
            const novoLivro = readlinesync.question("\nDigite o nome: ")
            pilha.push(novoLivro)
            console.log("\nLivro Adicionado!")
            break

        case 2:
            console.log("\nLista de Livros na Pilha: ")
            console.log(pilha.printStack())
            break
        case 3:
            console.log("\nUm livro foi retirado da pilha: " + pilha.pop())
            break
    
        default:
            console.log("\nDigite um comando valido!")
            break
    }
}