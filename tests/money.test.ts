import { Franc, Money } from '../app/money'

describe('', function() {

    test('testMultiplication', () => {
        const five:Money = Money.dollar(5)
        expect(Money.dollar(10)).toMatchObject(five.times(2))
        expect(Money.dollar(15)).toMatchObject(five.times(3))
    })
    
    test('testEquality', () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
        expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)
        expect(Money.franc(5).equals(Money.franc(5))).toBe(true)
        expect(Money.franc(5).equals(Money.franc(6))).toBe(false)
        expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
    })
    
    test('testFrancMultiplication', () => {
        const five:Money = Money.franc(5)
        expect(Money.franc(10)).toMatchObject(five.times(2))
        expect(Money.franc(15)).toMatchObject(five.times(3))
    })

    test('testCurrency', () => {
        expect(Money.dollar(1).makeCurrency()).toBe("USD")
        expect(Money.franc(1).makeCurrency()).toBe("CHF")
    })

    test('testDifferentClassEquality', () => {
        expect(new Money(10, "CHF").equals(new Franc(10, "CHF"))).toBe(true)
    })
})
