var Honda = /** @class */ (function () {
    function Honda(modelo, vidro_eletrico, freio_ABS, Tracao_4x4, mudanca_combustivel) {
        this.modelo = modelo;
        this.vidro_eletrico = vidro_eletrico;
        this.freio_ABS = freio_ABS;
        this.Tracao_4x4 = Tracao_4x4;
        this.mudanca_combustivel = mudanca_combustivel;
    }
    Honda.prototype.atributos = function () {
        console.log("Qual o modelo do carro? ".concat(this.modelo, ". Este carro possui vidros el\u00E9tricos? ").concat(this.vidro_eletrico, ".Este carro possui freios ABS? ").concat(this.freio_ABS, ". Este carro possui tra\u00E7\u00E3o nas quatro rodas? ").concat(this.Tracao_4x4, ". Este carro possui mudan\u00E7a de combustivel? ").concat(this.mudanca_combustivel));
    };
    Honda.prototype.Metodo_Tracao = function () {
        console.log("O carro está ativando a tração");
    };
    Honda.prototype.Metodo_Freio = function () {
        console.log("O carro está freando");
    };
    return Honda;
}());
var carro = new Honda("Civic", true, true, false, true);
carro.atributos();
