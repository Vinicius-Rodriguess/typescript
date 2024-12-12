import readlinesync = require("readline-sync")

const valorEmReais = readlinesync.questionInt("Digite um valor em Reais (sem os centavos): ")

const decomporValor = (valor: number): void => {
    if (valor <= 0) {
        console.log("Por favor, insira um valor positivo.")
        return
    }

    let valorRestante = valor
    const cedulasDisponiveis = [200, 100, 50, 20, 10, 5, 2, 1]
    let indexCedula = 0
    const utilizar = []

    while (valorRestante !== 0) {
        const cedulaAtual = cedulasDisponiveis[indexCedula]

        if (cedulaAtual > valorRestante) {
            indexCedula++
        } else {
            valorRestante -= cedulaAtual
            utilizar.push(cedulaAtual)
        }
    }

    listarCedulas(utilizar)
}


const listarCedulas = (cedulas: number[]): void => {
    const cedulasObj: {[key: number]: number} = {}

    cedulas.forEach((cedula) => {
        if (cedulasObj[cedula]) 
            cedulasObj[cedula]++
        else 
            cedulasObj[cedula] = 1
    })

    for (let key in cedulasObj) {
        console.log(`${cedulasObj[key]} nota(s) de R$ ${key},00`)
    }
}

decomporValor(valorEmReais)