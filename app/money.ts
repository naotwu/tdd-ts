export abstract class Money {

    public amount:number
    public currency:string

    constructor(amount: number, currency: string) {
        this.amount = amount
        this.currency = currency
    }

    abstract times(multiplier: number):Money

    public equals(object: Money):boolean {
        const money:Money = object
        return this.amount === money.amount && this.constructor.name === object.constructor.name 
    }

    static dollar(amount: number):Money {
        return new Dollar(amount, "USD")
    }
    
    static franc(amount: number):Money {
        return new Franc(amount, "CHF")
    }

    public makeCurrency():string {
        return this.currency
    }
}

export class Dollar extends Money{

    constructor(amount: number, currency: string) {
        super(amount, currency)
    }

    public times(multiplier: number):Money {
        return Money.dollar(this.amount * multiplier)
    }

    public makeCurrency():string {
        return "USD"
    }
}

export class Franc extends Money{

    constructor(amount: number, currency: string) {
        super(amount, currency)
    }

    public times(multiplier: number):Money {
        return Money.franc(this.amount * multiplier)
    }

    public makeCurrency():string {
        return this.currency
    }
}