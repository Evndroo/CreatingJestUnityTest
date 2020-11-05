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
        if(typeof quantidade !== "number"){
            throw new Error("A quantidade a ser acelerada deve ser um número")
        }
        this._velocidade += quantidade
    }

}

module.exports = Carro;