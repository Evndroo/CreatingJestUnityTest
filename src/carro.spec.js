const Carro =  require("./Carro")

test('Check if gol has is stoped initialy', () => {
    const gol = new Carro("gol", "Volkswagen", 10000);
    expect(gol._velocidade).toBe(0);
});