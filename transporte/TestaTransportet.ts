import { Automovel } from "./Automovel"
import { Terreste } from "./Terrestre"
import { Transporte } from "./Transporte"

function main() {

    const t1 = new Transporte(5)

    const tr1 = new Terreste(5, 4, 100)

    const a1 = new Automovel(5 ,4 , 250, "Verde", 5, "FLV-4566", 5)
    a1.visualizar()
}

main()