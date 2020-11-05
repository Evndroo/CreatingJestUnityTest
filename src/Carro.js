class Carro{

    constructor(modelo, marca, preco){
        this._modelo = modelo;
        this._marca = marca;
        this._preco = preco;
        this._velocidade = 0;
    }

    get velocidade(){
        return this._velocidade
    }

    acelerar(quantidade){
        this._velocidade += quantidade
    }

}

module.exports = Carro;