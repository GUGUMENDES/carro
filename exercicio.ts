class Honda {
    modelo: string
    vidro_eletrico: boolean;
    freio_ABS: boolean;
    Tracao_4x4: boolean;
    mudanca_combustivel: boolean;

    constructor(modelo: string, vidro_eletrico: boolean, freio_ABS: boolean, Tracao_4x4: boolean, mudanca_combustivel: boolean) {
        this.modelo = modelo
        this.vidro_eletrico = vidro_eletrico;
        this.freio_ABS = freio_ABS;
        this.Tracao_4x4 = Tracao_4x4;
        this.mudanca_combustivel = mudanca_combustivel;

    }

    atributos(): void {
        console.log(`Qual o modelo do carro? ${this.modelo}. Este carro possui vidros elétricos? ${this.vidro_eletrico}.Este carro possui freios ABS? ${this.freio_ABS}. Este carro possui tração nas quatro rodas? ${this.Tracao_4x4}. Este carro possui mudança de combustivel? ${this.mudanca_combustivel}`);
    }

    Metodo_Tracao(): void {
        console.log("O carro está ativando a tração");
    }

    Metodo_Freio(): void {
        console.log("O carro está freando");
    }

}
let carro = new Honda("Civic", true, true, false, true);
carro.atributos()
