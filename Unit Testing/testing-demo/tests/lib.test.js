const lib = require('../lib')
const db = require('../db')

describe('absolute', () => {
    test('should return +ve number if input is positive', () => {
        const res = lib.absolute(1)
        expect(res).toBe(1)
    })

    test('should return +ve number if input is negative', () => {
        const res = lib.absolute(-1)
        expect(res).toBe(1)
    })

    test('should return 0 number if input is 0', () => {
        const res = lib.absolute(0)
        expect(res).toBe(0)
    })
})

describe('greet', () => {
    it('should return greeting message', () => {
        const res = lib.greet("Dhanush")
        expect(res).toMatch(/Dhanush/)
    })
})

describe('getCurrencies', () => {
    it("should return supported currencies", () => {
        const res = lib.getCurrencies()

        // Proper Way
        expect(res).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']))
    })
})

describe('getProduct', () => {
    it('should return the product with given id', () => {

    const result = lib.getProduct(1)

    expect(result).toMatchObject({id: 1, price: 10})
    expect(result).toHaveProperty('id', 1)
    })
})

describe('registerUser', () => {
    it('should throw if username is falsy' , () => {
        
        const args = [null, undefined, 0, '', false, NaN]
        args.forEach(a => {
            expect(() => lib.registerUser(a)).toThrow()
        })
    })

    it('should return a user object if valid username is passed', () => {
        const res = lib.registerUser("Dhanush")
        expect(res).toMatchObject({username: "Dhanush"})
        expect(res.id).toBeGreaterThan(10)
    })

})
