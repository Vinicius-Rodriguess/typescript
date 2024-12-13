import { Triatleta } from "./Triatleta"

function main() {

    const triAtleta = new Triatleta("Simone")

    triAtleta.visualizar()

    triAtleta.aquecer()
    triAtleta.nadar()
    triAtleta.pedalar()
    triAtleta.correr()
    triAtleta.cansou()

}
main()