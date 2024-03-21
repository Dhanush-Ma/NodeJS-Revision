const exercise1 = require('../exercise1')

describe("fizzBuzz", () => {
    it('should throw if not a number', () => {
        expect(() => exercise1.fizzBuzz(NaN).toThrow())
    })

    it('should return FizzBuzz if it is divisble by 3 and 5', () =>{
        const result = exercise1.fizzBuzz(15)
        expect(result).toEqual("FizzBuzz")
    })

    it('should return Fizz if it is divisble by 3', () =>{
        const result = exercise1.fizzBuzz(9)
        expect(result).toEqual("Fizz")
    })

    it('should return Buzz if it is divisble by 5', () =>{
        const result = exercise1.fizzBuzz(5)
        expect(result).toEqual("Buzz")
    })

    it('should return input if it is not divisble by 5 and 3', () =>{
        const result = exercise1.fizzBuzz(4)
        expect(result).toEqual(4)
    })
})



