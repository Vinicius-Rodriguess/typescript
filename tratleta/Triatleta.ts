import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor {


	constructor(nome: string) {
        super(nome)
    }

    public aquecer(): void {
        console.log("Aquecendo...")
    }

    public nadar(): void {
        console.log("Nadando...")
    }

    public pedalar(): void {
        console.log("Pedalando...")
    }

    public correr(): void {
        console.log("Correndo...")
    }

    public cansou(): void {
        console.log("Cansou...")
    }
}