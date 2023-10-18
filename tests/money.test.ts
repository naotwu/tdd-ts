import { Bank } from '../app/Bank'
import { Expression } from '../app/Expression'
import { Money } from '../app/money'

describe('', function() {

    test('testMultiplication', () => {
        const five:Money = Money.dollar(5)
        expect(Money.dollar(10)).toMatchObject(five.times(2))
        expect(Money.dollar(15)).toMatchObject(five.times(3))
    })
    
    test('testEquality', () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
        expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)
        expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
    })
    
    test('testCurrency', () => {
        expect(Money.dollar(1).makeCurrency()).toBe("USD")
        expect(Money.franc(1).makeCurrency()).toBe("CHF")
    })

    test('testSimpleAddition', () => {
        const five = Money.dollar(5)
        const bank: Bank = new Bank()
        const sum: Expression = five.plus(five)
        const reduced: Money = bank.reduce(sum, "USD")
        expect(sum).toEqual(Money.dollar(10))
    })

})
