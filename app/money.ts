import { Expression } from "./Expression"

export class Money implements Expression{

    public amount:number
    public currency:string

    constructor(amount: number, currency: string) {
        this.amount = amount
        this.currency = currency
    }

    public times(multiplier: number): Money {
        return new Money(this.amount * multiplier, this.currency)
    }

    public equals(object: Money):boolean {
        const money:Money = object
        return this.amount === money.amount && this.makeCurrency() === object.makeCurrency()
    }

    static dollar(amount: number):Money {
        return new Money(amount, "USD")
    }
    
    static franc(amount: number):Money {
        return new Money(amount, "CHF")
    }

    public makeCurrency():string {
        return this.currency
    }

    public toString() {
        return this.amount + " " + this.currency
    }

    public plus(addend:Money): Expression {
        return new Money(this.amount + addend.amount, this.currency)
    }
}
