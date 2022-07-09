const { expect } = require("chai");
const  carService = require("./03. Car service_Resources");

describe('Test', () => {
    describe("isItExpensive", () => {
        it('returns severe issue of issue is Engine or Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`)
        })
        it('returns a bit cheaper if NOT Engine or Transmission', () => {
            expect(carService.isItExpensive('a')).to.equal(`The overall price will be a bit cheaper`)
        })
    })

    describe("discount", () => {
        it('returns invalid input if params are not numbers', () => {
            expect(() => carService.discount('a', 100)).to.throw("Invalid input")
            expect(() => carService.discount(3, "100")).to.throw("Invalid input")
            expect(() => carService.discount('a', "100")).to.throw("Invalid input")
        })


        it('cannot apply discount if numberOfParts <= 2', () => {
            expect(carService.discount(1, 120)).to.equal("You cannot apply a discount")
            expect(carService.discount(2, 120)).to.equal("You cannot apply a discount")
        })


        it('returns  15% discout', () => {
            expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$')
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$')
        })

        it('returns  30% discout', () => {
            expect(carService.discount(8, 100)).to.equal('Discount applied! You saved 30$')
        })
    })

    describe('partsToBuy', () => {
        it('returns 0 if partsCatalog is empty', () => {
            expect(carService.partsToBuy([], ["a"])).to.equal(0)
        })

        it('returns invalid input if params are not arrays', () => {
            expect(() => carService.partsToBuy(['a', 'b'], 1)).to.throw("Invalid input")
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 1)).to.throw("Invalid input")
            expect(() => carService.partsToBuy("a b c", ['a', 'b', 'c'])).to.throw("Invalid input")
        })
        
        it('returns total price', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"])).to.equal(145)
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.equal(375)
        })
    })
})

//mocha '.\03\test.js'

//[{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]