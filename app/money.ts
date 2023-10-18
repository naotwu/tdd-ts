export class Money {

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
        return new Dollar(amount, "USD")
    }
    
    static franc(amount: number):Money {
        return new Franc(amount, "CHF")
    }

    public makeCurrency():string {
        return this.currency
    }

    public toString() {
        return this.amount + " " + this.currency
    }
}

export class Dollar extends Money{

    constructor(amount: number, currency: string) {
        super(amount, currency)
    }

}

export class Franc extends Money{

    constructor(amount: number, currency: string) {
        super(amount, currency)
    }

}