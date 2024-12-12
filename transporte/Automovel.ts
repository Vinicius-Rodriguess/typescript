import { Terreste } from "./Terrestre";

export class Automovel extends Terreste {
    private _cor: string;
    private _numeroPortas: number;
    private _placa: string;
    private _marcha: number;

	constructor(capacidadee: number, numeroRodas: number, velocidade: number, cor: string, numeroPortas: number, placa: string, marcha: number) {
        super(capacidadee, numeroRodas, velocidade)
		this._cor = cor;
		this._numeroPortas = numeroPortas;
		this._placa = placa;
		this._marcha = marcha;
	}

	public get cor(): string {
		return this._cor;
	}

	public get numeroPortas(): number {
		return this._numeroPortas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marcha(): number {
		return this._marcha;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numeroPortas(value: number) {
		this._numeroPortas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marcha(value: number) {
		this._marcha = value;
	}

    public visualizar() {
        super.visualizar()
        console.log("Cor: ", this._cor)
        console.log("Numeros de portas: ", this._numeroPortas)
        console.log("Placa: ", this._placa)
        console.log("Marchas: ", this._marcha)
    }

}