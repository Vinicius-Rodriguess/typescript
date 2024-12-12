import { Transporte } from "./Transporte"

export class Terreste extends Transporte {
    private _numeroRodas: number
    private _velocidade: number

    constructor(capacidadee: number, numeroRodas: number, velocidade: number) {
        super(capacidadee)
        this._numeroRodas = numeroRodas
        this._velocidade = velocidade
    }
    
	public get numeroRodas(): number {
		return this._numeroRodas
	}

	public get velocidade(): number {
		return this._velocidade
	}

    public set numeroRodas(value: number) {
		this._numeroRodas = value
	}

	public set velocidade(value: number) {
		this._velocidade = value
	}


    public visualizar() {
        super.visualizar()
        console.log("Numero de Rodas: ", this._numeroRodas)
        console.log("Velocidade: ", this._velocidade)
    }
}