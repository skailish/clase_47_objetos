


describe("getBoxVolume()", (size) => {
    it("Debería devolver el volúmen", () => {

        const size = { width: 2, length: 5, height: 1 };
        const resultado = getBoxVolume(size);

        expect(resultado).to.equal(10);

    })
    it("No debería modificar el parametro original", () => {

        const size = { width: 2, length: 5, height: 1 };
        const newSize = Object.assign({}, size)

        getBoxVolume(size);

        expect(size).to.eql(newSize);
    })

})

describe("round()", (number) => {
    it("Debería devolver un objeto", () => {

        const number = 13.3;
        const resultado = round(number);

        expect(resultado).to.be.an("object");

    })

    it("Debería devolver un objeto con {floor: 13, ceil: 14, round: 13}", () => {

        const number = 13.3;
        const resultado = round(number);

        expect(resultado).to.eql({ floor: 13, ceil: 14, round: 13 });

    })

})

describe("merge()", (info1, info2) => {
    it("Debería devolver un objeto", () => {

        const info1 = { a: 1, b: 2, c: 3 }
        const info2 = { d: 4, b: 5 }

        const resultado = merge(info1, info2);

        expect(resultado).to.be.an("object");

    })
    it("Debería devolver un objeto con { a: 1, c: 3, d: 4, b: 5}", () => {

        const info1 = { a: 1, b: 2, c: 3 }
        const info2 = { d: 4, b: 5 }

        const resultado = merge(info1, info2);

        expect(resultado).to.eql({ a: 1, c: 3, d: 4, b: 5 });

    })

})

describe("differentiate()", (info1, info2) => {
    it("Debería devolver un objeto", () => {

        const info1 = { a: 1, b: 2, c: 3 }
        const info2 = { d: 4, b: 5 }

        const resultado = differentiate(info1, info2);

        expect(resultado).to.be.an("object");

    })

    it("Debería devolver la diferencia de propiedades de dos objetos", () => {

        const info1 = { a: 1, b: 2, c: 3 }
        const info2 = { d: 4, b: 5 }
        const resultado = differentiate(info1, info2);

        expect(resultado).to.eql({ a: 1, c: 3, d: 4 });

    })


})

describe("removeProperties()", (data, props) => {
    it("Debería devolver un objeto", () => {

        const data = { a: 1, b: 2, c: 3 };
        const props = ["c"];

        const resultado = removeProperties(data, props);

        expect(resultado).to.be.an("object");

    })

    it("Debería remover las propiedades dadas en un array", () => {

        const data = { a: 1, b: 2, c: 3 };
        const props = ["c"];

        const resultado = removeProperties(data, props);

        expect(resultado).to.eql({ a: 1, b: 2 });

    })
})

describe("filterProperties()", (data, props) => {
    it("Debería devolver un objeto", () => {

        const data = { a: 1, b: 2, c: 3 };
        const props = ["c", "b"];

        const resultado = filterProperties(data, props);

        expect(resultado).to.be.an("object");

    })

    it("Debería remover las propiedades dadas en un array", () => {

        const data = { a: 1, b: 2, c: 3 };
        const props = ["c", "b"];

        const resultado = filterProperties(data, props);

        expect(resultado).to.eql({ b: 2, c: 3 });

    })
})

describe("buyProducts()", (money, products) => {
    it("Debería devolver un objeto", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = buyProducts(money, products);

        expect(resultado).to.be.an("object");

    })

    it("Debería devolver un objecto cuyas values sean booleanos", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = buyProducts(money, products);

        expect(resultado).to.eql({ cookies: true, chocolate: true, soda: false });

    })

})

describe("canBuyAllProduct()", (money, products) => {
    it("Debería devolver un booleano", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = canBuyAllProduct(money, products);

        expect(resultado).to.be.a("boolean");

    })

    it("Debería devolver false si el dinero no alcanza", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = canBuyAllProduct(money, products);

        expect(resultado).to.be.false;

    })

})

describe("getXP()", (money, products) => {
    it("Debería devolver número", () => {

        const score = { easy: 10, medium: 50, hard: 100 }
        const challenges = { easy: 3, medium: 4, hard: 2 }

        const resultado = getXP(score, challenges);

        expect(resultado).to.be.finite;

    })

    it("Debería devolver la suma del XP", () => {

        const score = { easy: 10, medium: 50, hard: 100 }
        const challenges = { easy: 3, medium: 4, hard: 2 }

        const resultado = getXP(score, challenges);

        expect(resultado).to.equal(430);

    })

})

describe("getStringInfo()", (string) => {
    it("Debería devolver objeto", () => {

        const string = "H3ll0 Wor1d";


        const resultado = getStringInfo(string);

        expect(resultado).to.be.an("object");

    })

    it("Debería recorrer un string y contar sus elementos", () => {

        const string = "H3ll0 Wor1d";
        const resultado = getStringInfo(string);

        expect(resultado).to.eql({ letters: 7, digits: 3, spaces: 1 });

    })

})