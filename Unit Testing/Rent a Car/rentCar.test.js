const { expect } = require("chai");
const rentCar = require("./rentCar");

describe("Test", () => {
    describe("searchCar", () => {
        it("return message for found car in shop", () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")).to.equal("There is 1 car of model Audi in the catalog!")
        })
        it('throws an error if the parameters are not valid', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1)).to.throw("Invalid input!")
            expect(() => rentCar.searchCar("Volkswagen BMW Audi", "Audi")).to.throw("Invalid input!")
        }) 
        it('throws an error if there are not matching elements', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Tesla")).to.throw("There are no such models in the catalog!")

        })
    })

    describe("calculatePriceOfCar", () => {
        it("returns how much it will cost to rent a certain model", () => {
            expect(rentCar.calculatePriceOfCar("BMW", 3)).to.equal("You choose BMW and it will cost $135!")
        })
        it('throws an error if the parameters ar not valid', () => {
            expect(() => rentCar.calculatePriceOfCar("BMW", "a")).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar(2, 3)).to.throw("Invalid input!")
        })
        it('throws an error if there are not matching elements', () => {
            expect(() => rentCar.calculatePriceOfCar("Tesla", 3)).to.throw("No such model in the catalog!")

        })
    })

    describe('checkBudget', () => {
        it("returns you rent a car if the budget is equal or more that needed", () => {
            expect(rentCar.checkBudget(10, 2, 40)).to.equal("You rent a car!");
            expect(rentCar.checkBudget(10, 2, 20)).to.equal("You rent a car!");
        })
        it("returns not enough budget if the budget is less that needed", () => {
            expect(rentCar.checkBudget(20, 2, 10)).to.equal("You need a bigger budget!");
        })
        it('throws an error if the parameters ar not valid', () => {
            expect(() => rentCar.checkBudget("a", 2, 40)).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget(2, "a", 40)).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget(2, 2, "a")).to.throw("Invalid input!")
        })
    })    
  });