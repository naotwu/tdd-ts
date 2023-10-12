import { Money } from '../app/money'

describe('', function() {

    test('testMultiplication', () => {
        const five:Money = Money.dollar(5)
        expect(Money.dollar(10)).toMatchObject(five.times(2))
        expect(Money.dollar(15)).toMatchObject(five.times(3))
    })
    
    test('testEquality', () => {
        expect(true).toBe(Money.dollar(5).equals(Money.dollar(5)))
        expect(false).toBe(Money.dollar(5).equals(Money.dollar(6)))
        expect(true).toBe(Money.franc(5).equals(Money.franc(5)))
        expect(false).toBe(Money.franc(5).equals(Money.franc(6)))
        expect(false).toBe(Money.franc(5).equals(Money.dollar(5)))
    })
    
    test('testFrancMultiplication', () => {
        const five:Money = Money.franc(5)
        expect(Money.franc(10)).toMatchObject(five.times(2))
        expect(Money.franc(15)).toMatchObject(five.times(3))
    })
})
