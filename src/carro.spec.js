const Carro =  require("./Carro")

describe("Validating the \"Car\" class", ()=>{
    const gol = new Carro("Gol", "Volkswagen", 10000);

    it('Check if gol has is stoped initialy', () => {
        expect(gol._velocidade).toBe(0);
    });

    it("Testing aceleration", () =>{
        let velocity = 10;

        gol.acelerar(velocity);
        expect(gol._velocidade).toBe(velocity)
    })

    it("Triyng to not acelerete with a string value",()=>{
        expect(() => {gol.acelerar("1")}).toThrow(new Error("A quantidade a ser acelerada deve ser um número"))
    })

})

